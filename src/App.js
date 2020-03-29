/*eslint-disable no-undef*/
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core'

function App() {
  const attachDebugger = async (tabs) => {
    chrome.runtime.sendMessage({ action: 'attach_debugger', payload: { tabId: tabs[0].id } })
  }

  const detachDebugger = async (tabs) => {
    chrome.runtime.sendMessage({ action: 'detach_debugger', payload: { tabId: tabs[0].id } })
  }

  const stop = async () => {
    await chrome.tabs.query({ active: true }, detachDebugger)
  }

  const start = async () => {
    await chrome.tabs.query({ active: true }, attachDebugger)
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <div>adaw bray</div>
      <div>
        <Button variant="outlined" onClick={start}>Start</Button>
        <Button variant="outlined" onClick={stop}>Stop</Button>
      </div>
    </div>
  );  
}

export default App;
/*eslint-enable no-undef*/