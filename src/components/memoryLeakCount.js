/* eslint-disable no-undef */
import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import Context from '../context';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

export default function MemoryLeakCount() {
  const { store } = useContext(Context)

  const toDashboard = () => {
    if (process.env.NODE_ENV === 'production') {
      let url = chrome.runtime.getURL('option/index.html')

      let link = document.createElement("a");
      link.target = "_blank";
      link.href = `${url}`;
      return link.click();
    }
  }
  
  return (
    <Button
      variant="contained"
      startIcon={<TrackChangesIcon />}
      color="secondary"
      fullWidth
      onClick={() => toDashboard()}
    >
      Memory Leak Detected in this Page ({store.memoryLeak})
    </Button>
  )
}