import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    jonquil: Palette['primary'];
    themeBlue: Palette['primary'];

  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    jonquil?: PaletteOptions['primary'];
    themeBlue?: PaletteOptions['primary'];


  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    jonquil: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    px400: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}



// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "px400", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      px400: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {

    // Name of the component
    MuiAlert: {

      styleOverrides: {
        standardInfo: {
          color: '#166086',
          border: 'none',
          backgroundColor: '#D1EEFC'
        },

        standardError: {
          color: '#A61B1B',
          border: 'none',
          backgroundColor: '#FACDCD'
        }

      }
    },

    MuiPaper: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #CBD2D9',
          boxShadow: 'none'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '8px',
          textTransform: 'capitalize',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent'
      },
      styleOverrides: {

        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '0px',
          boxShadow: 'none',
          backgroundColor: '#FBF8F1'
        },
      },
    }
    ,
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '8px',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Ubuntu', '"Helvetica Neue"', 'Manrope', 'Poppins'].join(),
  },

  palette: {
    background: {
      default: '#F5F7FA'
    },
    text: {
      primary: '#102A43',
      secondary: '#627D98',
    },

    primary: {
      main: '#14919B',
      light: '#199473'
    },
    secondary: {
      main: '#DA100B',
    },
    error: {
      main: '#A61B1B',
    },

    success: {
      main: '#27AB83',
      light: '#199473'
    },

    neutral: {
      main: '#22577E',
      contrastText: '#fff',
    },
    jonquil: {
      main: '#F9C80E',  // #FCF300',
      contrastText: '#000'
    },
    themeBlue: {
      main: '#166086',
      contrastText: '#627D98'
    },
  },

});

export default theme;

/*
Current
Background : F5F7FA 
ThemeBlue : 166086
Primary : 14919B
Border :  CBD2D9
Error : A61B1B

*/