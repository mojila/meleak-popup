/*eslint-disable no-undef*/
import React, { useEffect, useState } from 'react'
import { Paper, Button, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((_theme) => ({
  paper: {
    padding: 8
  }
}))

const ActionControl = () => {
  const [active, setActive] = useState(false)

  const classes = useStyles()

  const attachDebugger = async (tabs) => {
    await chrome.runtime.sendMessage({ action: 'attach_debugger', payload: { tabId: tabs[0].id } })
    setActive(true)
  }

  const detachDebugger = async (tabs) => {
    await chrome.runtime.sendMessage({ action: 'detach_debugger', payload: { tabId: tabs[0].id } })
    setActive(false)
  }

  const stop = async () => {
    await chrome.tabs.query({ active: true }, detachDebugger)
  }

  const start = async () => {
    await chrome.tabs.query({ active: true }, attachDebugger)
  }

  const checkActivation = async () => {
    chrome.runtime.sendMessage({ action: 'is_attached_debugger' }, (msg) => {
      setActive(msg)
    })
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      checkActivation()
    }
  }, [])

  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="flex-end">
        {
          active
            ? <Button size="small" variant="outlined" onClick={stop}>Stop</Button>
            : <Button size="small" variant="outlined" onClick={start}>Start</Button>
        }
      </Box>
    </Paper>
  )
}

export default ActionControl
/*eslint-enable no-undef*/