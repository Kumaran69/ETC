import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#880e4f",
    },
    background: {
      default: "#fafafa",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",

    h2: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;