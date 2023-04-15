import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    xl: false;
  }
}
