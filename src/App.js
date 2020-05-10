/*eslint-disable no-undef*/
import React, { useEffect, useContext } from 'react';
import { Grid, Box, Typography, makeStyles, Paper } from '@material-ui/core'
import ActionControl from './components/actionControl';
import CurrentHeapUsed from './components/currentHeapUsed';
import CurrentHeapTotal from './components/currentHeapTotal';
import Context from './context';
import actions from './actions';
import Chart from './components/chart';

const useStyles = makeStyles((_theme) => ({
  paper: {
    padding: 8
  }
}))

function App() {
  const { dispatch } = useContext(Context)

  const classes = useStyles()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      chrome.runtime.onMessage.addListener(({ action, payload }, _sender, _sendResponse) => {
        if (action === 'update_heap') {
          let { usedHeap, totalHeap, heapData } = payload
          dispatch({ type: actions.UPDATE_HEAP, payload: { usedHeap, totalHeap, heapData } })
        }
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ActionControl />
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Box display="flex" justifyContent="center">
            <Typography variant="button" color="textSecondary">
              Current Stats
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <CurrentHeapUsed />
      </Grid>
      <Grid item xs={6}>
        <CurrentHeapTotal />
      </Grid>
      <Grid item xs={12}>
        <Chart />
      </Grid>
    </Grid>
  );  
}

export default App;
/*eslint-enable no-undef*/