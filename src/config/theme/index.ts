import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  spacing: 10,
  palette: {
    primary: {
      light: "#e3f2fd",
      main: "#1877f2",
      dark: "#283593",
    },
    secondary: {
      light: "#687898",
      main: "#323258",
      dark: "#1a1a2e",
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm", "md", "lg"],
  factor: 3,
  disableAlign: true,
});

export default theme;
