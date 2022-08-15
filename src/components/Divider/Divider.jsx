import React from "react";
import { Box } from "@mui/material";
import { useDarkMode } from "contexts";
import { modeColors } from "data/Constants";

const dividerStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "180px",
    margin: "10px 0 0",
  },
  line: {
    width: "100%",
    height: "2px",
  },

  blobContainer: {
    height: "10px",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
  },
  blob: {
    width: "35px",
    borderRadius: "10px",
  },
};
export const Divider = () => {
  const { mode } = useDarkMode();

  const { container, line, blob, blobContainer } = dividerStyles;
  return (
    <Box style={container}>
      <Box style={{ ...line, backgroundColor: modeColors[mode].contrast }} />
      <Box style={blobContainer}>
        <Box style={{ ...blob, backgroundColor: "var(--primary-color)" }}></Box>
      </Box>
    </Box>
  );
};
