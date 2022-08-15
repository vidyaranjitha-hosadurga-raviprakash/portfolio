import React from "react";
import { Container } from "@mui/material";
import { Profile } from "components/";
import { pageContainer } from "styles/commonStyles";
export const Home = () => {
  return (
    <Container
      sx={{
        ...pageContainer,
        marginTop: "5rem",
      }}
    >
      <Profile />
    </Container>
  );
};
