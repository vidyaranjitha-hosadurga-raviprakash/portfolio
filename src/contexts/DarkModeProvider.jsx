import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { DARK_MODE, LIGHT_MODE, modeColors } from "data/Constants";

const getThemeMode = (prevMode) => {
  return prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
};
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  // By deafult dark mode.
  const [mode, setMode] = useState(DARK_MODE);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleDarkMode: () => {
        localStorage.setItem("theme", getThemeMode(mode));
        setMode((prevMode) => getThemeMode(prevMode));
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: modeColors[mode],
        },
      }),
    [mode]
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setMode(theme);
      return;
    }
    localStorage.setItem("theme", DARK_MODE);
  }, []);

  return (
    <DarkModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkModeContext);

export { DarkModeProvider, useDarkMode };
