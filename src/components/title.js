/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import { Grid, Box, Typography, makeStyles, Paper } from '@material-ui/core'
import Context from '../context'

const useStyles = makeStyles((_theme) => ({
  paper: {
    padding: 8
  }
}))

function Title() {
  const { store } = useContext(Context)
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="center">
        <Typography variant="button" color="textSecondary">
          Current Stats - Page ({ store.page })
        </Typography>
      </Box>
    </Paper>
  )
}

export default Title