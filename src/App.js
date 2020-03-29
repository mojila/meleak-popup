/*eslint-disable no-undef*/
import React, { useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core'
import ActionControl from './components/actionControl';
import CurrentHeapUsed from './components/currentHeapUsed';
import CurrentHeapTotal from './components/currentHeapTotal';
import Context from './context';
import actions from './actions';
import Chart from './components/chart';

function App() {
  const { dispatch } = useContext(Context)

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