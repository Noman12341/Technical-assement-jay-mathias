import React, { useState, useEffect } from 'react';
import { Paper, Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles/createMuiTheme';
import useStyles from './styles';
import MainCard from './MainCard/MainCard';


// Root layout component
function Layout() {
  const classes = useStyles();
  const [errorField, setErrorField] = useState<boolean>(false);
  const [city, setCity] = useState<string>('Tokyo');
  return (
    <Paper className={classes.root}>
      <Box className={classes.searchBtnBox}>
        <FormControl className={classes.formControl}>
          <InputLabel id="CountryInput">Select City</InputLabel>
          <Select
            labelId="cityLable"
            id="city"
            value={city}
            onChange={(e: any) => setCity(e.target.value)}
          >
            <MenuItem value='Tokyo'>Tokyo</MenuItem>
            <MenuItem value='Delhi'>Delhi</MenuItem>
            <MenuItem value='Shanghai'>Shanghai</MenuItem>
            <MenuItem value='Sao Paulo'>Sao Paulo</MenuItem>
            <MenuItem value='Mexico City'>Mexico City</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="center" pt={4}>
        <MainCard cityName={city} />
      </Box>
    </Paper>
  );
}

export default Layout;
