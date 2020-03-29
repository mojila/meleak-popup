import React, {  } from 'react';
import { Grid } from '@material-ui/core'
import ActionControl from './components/actionControl';

function App() {
  return (
    <Grid container spacing="1">
      <Grid item xs="12">
        <ActionControl />
      </Grid>
    </Grid>
  );  
}

export default App;