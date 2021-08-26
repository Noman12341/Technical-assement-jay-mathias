import React from 'react';
import { Box, CircularProgress  } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function MySpinner() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress size={100} />
    </Box>
  );
}
export default MySpinner;