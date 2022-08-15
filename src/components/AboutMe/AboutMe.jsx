import React from "react";
import { Typography, Container, Grid, Stack } from "@mui/material";

import { PageHeader } from "components";
import { flexCenter, pageContainer } from "styles/commonStyles";
import { FIRSTNAME, SURNAME } from "data/Constants";

export const AboutMe = () => {
  return (
    <Container
      sx={{
        ...pageContainer,
      }}
    >
      <Stack spacing={5}>
        <PageHeader info={{ heading: "About me" }} />
        <Grid container sx={{ ...flexCenter }}>
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              padding: "3rem 3rem",
              width: "50rem",
              border: "0.1rem solid white",
              boxShadow: "0 0 20px -2px var(--primary-color)",
            }}
          >
            <Grid item>
              <Typography variant="body1">
                Hello! I'm {FIRSTNAME} {SURNAME},&nbsp;
                <Typography component="span" color="primary">
                  a passionate Front End developer
                </Typography>
                . I've 2 years of experience in developing qualitive, responsive
                web applications to deliver a intuitive, profound user
                experience.
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography variant="body1">
                I'm meticulous team-mate who likes to share ideas and prioritize
                communication in order to achieve goals within deadlines. I
                believe anything can be solved with a pragmatic, problem solving
                mindset.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
