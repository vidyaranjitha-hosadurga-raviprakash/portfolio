import React from "react";
import Typical from "react-typical";
import { Container, Stack, Grid, Typography } from "@mui/material";

import { PageHeader, ContactForm, SocialConnections } from "components";
import { flexCenterColumn, pageContainer } from "styles/commonStyles";
import "../../App.css";

const contactMeStyles = {
  contactContainer: {
    border: "1px solid var(--primary-color)",
    borderTopRightRadius: "5rem",
    boxShadow: "15px 15px 15px -15px var(--primary-color)",
    padding: "2rem",
  },
};

export const ContactMe = () => {
  return (
    <Container
      sx={{
        ...pageContainer,
      }}
    >
      <Stack spacing={5} sx={{ ...flexCenterColumn }}>
        <PageHeader
          info={{ heading: "Contact", subheading: "Let's connect" }}
        />

        <Grid
          container
          item
          sx={contactMeStyles.contactContainer}
          xs={10}
          sm={10}
          md={10}
          lg={10}
          justifyContent="space-around"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} sx={{ background: "" }}>
            <Grid container item direction="column">
              <Grid item>
                <Typography variant="h5">
                  <Typical loop={Infinity} steps={["Get in touch 📧", 2000]} />
                </Typography>
              </Grid>
              <Grid item>
                <SocialConnections />
              </Grid>
              <Grid item className="contact-bg"></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
