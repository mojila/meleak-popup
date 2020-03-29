/*eslint-disable no-undef*/
import React, { useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core'
import ActionControl from './components/actionControl';
import CurrentHeapUsed from './components/currentHeapUsed';
import CurrentHeapTotal from './components/currentHeapTotal';
import Context from './context';
import actions from './actions';

function App() {
  const { dispatch } = useContext(Context)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      chrome.runtime.onMessage.addListener(({ action, payload }, _sender, _sendResponse) => {
        if (action === 'update_heap') {
          let { usedHeap, totalHeap } = payload
          dispatch({ type: actions.UPDATE_HEAP, payload: { usedHeap, totalHeap } })
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
    </Grid>
  );  
}

export default App;
/*eslint-enable no-undef*/