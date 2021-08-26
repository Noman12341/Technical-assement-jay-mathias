import React, { useState, useEffect } from 'react';
import { Paper, Box, Grid, TextField, Switch, FormControl, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import useStyles from './styles';
import MainCard from './MainCard/MainCard';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import Brightness3Icon from '@material-ui/icons/Brightness3';

// Root layout component
function Layout() {
  const classes = useStyles();

  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [city, setCity] = useState<string>('Tokyo');

  const theme = createTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Box textAlign='right' p={3}>
          <Typography style={{ transform: 'translateX(-12px)' }}>{darkTheme ? 'Light Theme' : 'Dark Theme'}</Typography>
          <Switch onChange={() => setDarkTheme(!darkTheme)} />
        </Box>
        <Box className={classes.searchBtnBox}>
          <FormControl className={classes.formControl}>
            <InputLabel id="CountryInput">Select City</InputLabel>
            <Select labelId="cityLable" id="city" value={city} onChange={(e: any) => setCity(e.target.value)}>
              <MenuItem value="Tokyo">Tokyo</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Shanghai">Shanghai</MenuItem>
              <MenuItem value="Sao Paulo">Sao Paulo</MenuItem>
              <MenuItem value="Mexico City">Mexico City</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="center" pt={4}>
          <MainCard cityName={city} />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default Layout;
