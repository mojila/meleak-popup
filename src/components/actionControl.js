/*eslint-disable no-undef*/
import React, { useEffect, useContext } from 'react'
import { Paper, Button, makeStyles, Box, Typography, Grid } from '@material-ui/core'
import Context from '../context'
import actions from '../actions'

const useStyles = makeStyles((_theme) => ({
  paper: {
    padding: 8
  }
}))

const ActionControl = () => {
  const { store, dispatch } = useContext(Context)

  const classes = useStyles()

  const attachDebugger = async (tabs) => {
    await chrome.runtime.sendMessage({ action: 'attach_debugger', payload: tabs[0] })
    dispatch({ type: actions.START })
  }

  const detachDebugger = async (tabs) => {
    await chrome.runtime.sendMessage({ action: 'detach_debugger', payload: { tabId: tabs[0].id } })
    dispatch({ type: actions.STOP })
  }

  const stop = async () => {
    await chrome.tabs.query({ active: true }, detachDebugger)
  }

  const start = async () => {
    await chrome.tabs.query({ active: true }, attachDebugger)
  }

  const checkActivation = async () => {
    chrome.runtime.sendMessage({ action: 'is_attached_debugger' }, (msg) => {
      if (msg) {
        dispatch({ type: actions.START })
      } else {
        dispatch({ type: actions.STOP })
      }
    })
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line
      checkActivation()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" color="textSecondary">
            Meleak
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            {
              store.active
                ? <Button size="small" variant="outlined" onClick={stop}>Stop</Button>
                : <Button size="small" variant="outlined" onClick={start}>Start</Button>
            }
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ActionControl
/*eslint-enable no-undef*/