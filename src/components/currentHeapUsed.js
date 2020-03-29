import React, { useContext } from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'
import Context from '../context'

const useStyles = makeStyles((_theme) => ({
  paper: {
    padding: 8
  }
}))

const CurrentHeapUsed = () => {
  const classes = useStyles()
  const { store } = useContext(Context)

  return (
    <Paper className={classes.paper}>
      <Typography variant="button">Used Heap: { (store.usedHeap / 1000000).toFixed(2) } Mb</Typography>
    </Paper>
  )
}

export default CurrentHeapUsed