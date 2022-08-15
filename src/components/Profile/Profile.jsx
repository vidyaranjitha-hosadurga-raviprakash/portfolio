import React from "react";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";
import { Typography, Button, Grid, Avatar } from "@mui/material";

import {
  FIRSTNAME,
  SURNAME,
  TAG_LINE,
  PROFILE_PHOTO,
  profileDescription,
  navbarItems,
} from "data/Constants";

const profileProfileSX = {
  container: {
    boxShadow: "0 1px 0px 0px white",
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    marginLeft: "2rem",
  },

  profilePicture: {
    height: "92%",
    width: "92%",
    "&:hover": {
      transform: "scale(1.07)",
      transition: "1s ease-out",
    },
  },
};
export const Profile = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      spacing={3}
      sx={{ padding: "0rem 1rem" }}
    >
      {/* Introduction */}
      <Grid item>
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          spacing={1}
          xs={12}
        >
          <Grid container item direction="column" alignItems="center">
            <Grid item>
              <Grid container item alignItems="baseline">
                <Grid item>
                  <Typography variant="h5">Hello, I'm &nbsp;</Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h5"
                    color="primary"
                    className="first-letter-large"
                    sx={{ fontWeight: "bold" }}
                    component="p"
                  >
                    {FIRSTNAME} {SURNAME}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                sx={{ position: "relative", top: "-1.5rem" }}
              >
                <Typical loop={Infinity} steps={profileDescription} />
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                sx={{
                  position: "relative",
                  top: "-2rem",
                  fontWeight: "medium",
                }}
              >
                {`"${TAG_LINE}"`}
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container item spacing={3}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ borderRadius: "2rem" }}
                >
                  <ScrollLink
                    to={navbarItems[navbarItems.length - 1]}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                  >
                    <Typography variant="body1">
                      {`${navbarItems[navbarItems.length - 1]} Me`}
                    </Typography>
                  </ScrollLink>
                </Button>
              </Grid>
              <Grid item>
                {/* TODO : Place resume in public foler */}
                <Button
                  variant="outlined"
                  href="vidyaranjitha_hosdurga_raviprakash_resume.pdf"
                  download
                  sx={{ borderRadius: "2rem" }}
                >
                  <Typography variant="body1">Get Resume</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Profile Picture */}
      <Grid item sx={profileProfileSX.container}>
        <Avatar
          src={PROFILE_PHOTO}
          sx={profileProfileSX.profilePicture}
        ></Avatar>
      </Grid>
    </Grid>
  );
};
