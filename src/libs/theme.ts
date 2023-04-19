import { createTheme } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          padding: 0,
          margin: 0,
          boxSizing: "border-box",
        },
        body: {
          overflowX: "hidden",
        },
      },
    },
  },
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1080,
    },
  },
});
