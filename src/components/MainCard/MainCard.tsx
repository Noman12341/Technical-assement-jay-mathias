import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, Button, Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import { getWeatherInfo } from '../../helpers/helpers';
import Spinner from '../Spinner/Spinner';

interface Iprop {
  cityName: string
}
function MainCard({ cityName }: Iprop){
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherInfo, setWeatherInfo] = useState<any>({});

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const info = await getWeatherInfo(cityName);
      console.log('im running', info);
      setWeatherInfo(info);
      setIsLoading(false);
    };
    getData();
  }, [cityName]);

  return (
    <Card className={classes.root} elevation={7}>
      {isLoading ? <Spinner /> : (
        <CardContent>
          <Box display="flex" justifyContent='space-between'>
            <Typography component='h1'>17: 00</Typography>
            <Typography component='h1'>{weatherInfo.countryName}</Typography>
          </Box>
          <Typography className={classes.tempHeading}>{weatherInfo.temp}</Typography>
          <Box textAlign="center" my={2}>
            <img height="80" width="80" src={weatherInfo.weatherIcon} />
          </Box>
          <Box display="flex" justifyContent='space-between' alignItems='center'>
            <Box>
              <Typography className={classes.dayName}>{weatherInfo.currDay}</Typography>
            </Box>
            <Box className={classes.description}>{weatherInfo.description}</Box>
            <Box>
              <Typography component='span' className={classes.maxTemp}>{weatherInfo.temp_max}</Typography>
              <Typography component='span' className={classes.spreader}>|</Typography>
              <Typography component='span' className={classes.minTemp}>{weatherInfo.temp_min}</Typography>
            </Box>
          </Box>
        </CardContent>
      )}
    </Card>
  );
}
export default MainCard;