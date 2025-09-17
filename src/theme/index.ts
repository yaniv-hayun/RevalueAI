import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define color palette
const colors = {
  primary: '#0073E5', // Blue
  secondary: '#e41e5b', // Pink/Magenta
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
  // Additional colors used in the app
  fraud: '#FA003F', // Red for fraud
  nonFraud: '#2E7D32', // Green for non-fraud
  exposed: '#ff9800', // Orange for exposed fraud
  shipping: '#2196f3', // Blue for shipping mismatch
  topmail: '#ffeb3b', // Yellow for topmail fraud
  account: '#4caf50', // Green for account take over
  lightBlue: '#e3f2fd', // Light blue background
  darkBlue: '#1e3a8a', // Dark blue for gradients
  mediumBlue: '#3b82f6', // Medium blue
  lightGray: '#f0f0f0', // Light gray
  mediumGray: '#666666', // Medium gray
  darkGray: '#333333', // Dark gray
};

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
      light: '#4d9eff',
      dark: '#005bb5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      light: '#f06292',
      dark: '#ad1457',
      contrastText: '#ffffff',
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    background: {
      default: colors.lightGray,
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    // Custom colors for the app
    fraud: {
      main: colors.fraud,
    },
    nonFraud: {
      main: colors.nonFraud,
    },
    exposed: {
      main: colors.exposed,
    },
    shipping: {
      main: colors.shipping,
    },
    topmail: {
      main: colors.topmail,
    },
    account: {
      main: colors.account,
    },
    lightBlue: {
      main: colors.lightBlue,
    },
    darkBlue: {
      main: colors.darkBlue,
    },
    mediumBlue: {
      main: colors.mediumBlue,
    },
    lightGray: {
      main: colors.lightGray,
    },
    mediumGray: {
      main: colors.mediumGray,
    },
    darkGray: {
      main: colors.darkGray,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#212121',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
      light: '#4d9eff',
      dark: '#005bb5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.secondary,
      light: '#f06292',
      dark: '#ad1457',
      contrastText: '#ffffff',
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    // Custom colors for the app
    fraud: {
      main: colors.fraud,
    },
    nonFraud: {
      main: colors.nonFraud,
    },
    exposed: {
      main: colors.exposed,
    },
    shipping: {
      main: colors.shipping,
    },
    topmail: {
      main: colors.topmail,
    },
    account: {
      main: colors.account,
    },
    lightBlue: {
      main: colors.lightBlue,
    },
    darkBlue: {
      main: colors.darkBlue,
    },
    mediumBlue: {
      main: colors.mediumBlue,
    },
    lightGray: {
      main: colors.lightGray,
    },
    mediumGray: {
      main: colors.mediumGray,
    },
    darkGray: {
      main: colors.darkGray,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
          '&:focus': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default { lightTheme, darkTheme };
