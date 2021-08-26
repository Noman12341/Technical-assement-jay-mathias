import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: any) => ({
  root: {
    maxWidth: theme.spacing(80),
    width: theme.spacing(80),
    minHeight: theme.spacing(34.6)
  },
  tempHeading: {
    fontSize: theme.spacing(5),
    fontWeight: 800,
    lineHeight: 1.5,
    textAlign: 'center',
    '&::after':{
      content: '"o"',
      position:'relative',
      left: theme.spacing(0),
      bottom: theme.spacing(2.5),
      fontSize: theme.spacing(2),
    }
  }, maxTemp: {
    fontSize: theme.spacing(3),
    fontWeight: 800,
    display:'inline-block',
    '&::after':{
      content:'"o"',
      position: 'relative',
      left: theme.spacing(0.5),
      bottom: theme.spacing(2),
      fontSize: theme.spacing(2)
    }
  }, spreader: {
    fontSize: theme.spacing(3),
    fontWeight: 800,
    leignHeight: 1.5,
    color: 'grey',
    margin: theme.spacing(0, 1.5)
  }, minTemp: {
    fontSize: theme.spacing(2),
    fontWeight: 800,
    display:'inline-block',
    color: 'grey',
    '&::after':{
      content:'"o"',
      position: 'relative',
      left: theme.spacing(0.5),
      bottom: theme.spacing(1),
      fontSize: theme.spacing(1.5)
    }
  }, dayName: {
    fontSize: theme.spacing(2),
    fontWeight: 700,
  }, description: {
    fontSize: theme.spacing(2),
    fontWeight: 700,
    textAlign: 'center',
    transform: 'translateX(12px)'
  }
}));