import { createTheme, responsiveFontSizes } from "@mui/material/styles/";
import { DARK_MODE } from "data/Constants";

let theme = createTheme({
  palette: {
    mode: DARK_MODE,
    primary: { main: "#3182CE" },
  },
  typography: {
    allVariants: {
      fontFamily: "Charis SIL, serif !important",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
