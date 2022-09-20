import React from "react";
import { Box, CssBaseline, Container } from "@mui/material";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navbar, Home, AboutMe, Resume, ContactMe } from "components";
import { navbarItems } from "data/Constants";

import "./App.css";

export const App = () => {
  return (
    <Box>
      <CssBaseline />
      <ToastContainer
        autoClose={1000}
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        newestOnTop={true}
        transition={Slide}
      />

      <Navbar />
      <Container component="main">
        <section id={navbarItems[0]}>
          <Home />
        </section>
        <section id={navbarItems[1]}>
          <AboutMe />
        </section>
        <section id={navbarItems[2]}>
          <Resume />
        </section>
        <section id={navbarItems[3]}>
          <ContactMe />
        </section>
        <Box sx={{ marginBottom: "3rem" }}></Box>
      </Container>
    </Box>
  );
};
