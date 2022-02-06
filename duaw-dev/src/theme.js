import { createTheme } from '@mui/material/styles';



const theme = createTheme({
  
  typography: {
    fontFamily: [
      "Livvic", 
    ]
  },
  palette: {
    primary: {
      main: '#EB2E4E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#0A3147',
      contrastText: '#fff',
    },
    typography: {
      fontFamily: 'Livvic',
    },
    background: {
      default: "#e4f0e2",
    },
  },
});

export default theme;