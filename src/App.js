/*eslint-disable no-undef*/
import React, { useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core'
import ActionControl from './components/actionControl';
import CurrentHeapUsed from './components/currentHeapUsed';
import CurrentHeapTotal from './components/currentHeapTotal';
import MemoryLeakCount from './components/memoryLeakCount';
import Context from './context';
import actions from './actions';
import Chart from './components/chart';
import Title from './components/title';

const commands = {
  updateHeap: 'update_heap'
}

function App() {
  const { dispatch } = useContext(Context)

  const commandReceiver = (action, payload) => {
    switch(action) {
      case commands.updateHeap:
        let { usedHeap, totalHeap, heapData, page, memoryLeak } = payload
        dispatch({ type: actions.CHANGE_PAGE, payload: { page } })
        dispatch({ type: actions.UPDATE_COUNT, payload: { memoryLeak } })
        return dispatch({ type: actions.UPDATE_HEAP, payload: { usedHeap, totalHeap, heapData } })
      default:
        return
    }
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      chrome.runtime.onMessage.addListener(({ action, payload }, _sender, _sendResponse) => {
        commandReceiver(action, payload)
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
        <Title />
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
      <Grid item xs={12}>
        <MemoryLeakCount />
      </Grid>
    </Grid>
  );  
}

export default App;
/*eslint-enable no-undef*/