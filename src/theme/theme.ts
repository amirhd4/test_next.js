'use client';

import { createTheme } from '@mui/material/styles';

export const fontFamily = 'var(--font-main), Vazirmatn, Tahoma, sans-serif';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#19C3A0',
      dark: '#0FA384',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F29A3C',
    },
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },
    background: {
      default: '#F6F8FE',
      paper: '#fff',
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily,
    h2: {
      fontSize: '2.75rem',
      fontWeight: 800,
      lineHeight: 1.4,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 800,
      lineHeight: 1.5,
    },
    body2: {
      lineHeight: 2,
      color: '#6B7280',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: 'rtl',
          textAlign: 'right',
          fontFamily,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 700,
          padding: '8px 24px',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;