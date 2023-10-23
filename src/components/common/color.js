
import { createTheme} from '@mui/material/styles';
import { blueGrey} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[400],
      contrastText: '#fff',
    },
    light: {
      main: blueGrey[100],
      contrastText: '#000'
    },
    dark: {
      main: blueGrey[800],
      second: blueGrey[900],
      contrastText: '#fff'
    },

  },
});


export default theme;
