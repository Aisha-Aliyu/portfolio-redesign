'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4b6cb7',
    },
    secondary: {
      main: '#182848',
    },
  },
  typography: {
    fontFamily: ['"Inter"', 'sans-serif'].join(','),
  },
});

export default theme;