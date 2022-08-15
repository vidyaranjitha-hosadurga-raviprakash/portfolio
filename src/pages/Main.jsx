import React from "react";
import { Box, Container } from "@mui/material";

import { Home, AboutMe } from "components";
import { flexCenterColumn } from "styles/commonStyles";
import { navbarItems } from "data/Constants";
export const Main = () => {
  return (
    <Container sx={{ ...flexCenterColumn, width: "95%" }}>
      <Home id={navbarItems[0]} />
      <AboutMe id={navbarItems[1]} />
      <Box sx={{ marginBottom: "2rem" }}></Box>
    </Container>
  );
};
