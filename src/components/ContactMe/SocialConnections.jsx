import React from "react";
import { Grid, IconButton } from "@mui/material";
import {
  LinkedIn as LinkedInIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material/";

import { openNewTab } from "utils/generalOperations";

const GMAIL_ID = "vidyaranjithapattar@gmail.com";

const socialConnections = [
  {
    url: "https://www.linkedin.com/in/vidyaranjitha-hosadurga-raviprakash",
    icon: <LinkedInIcon />,
  },
  {
    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_ID}`,
    icon: <MailIcon />,
  },
  {
    url: "https://github.com/vidyaranjitha-hosadurga-raviprakash",
    icon: <GitHubIcon />,
  },
];
export const SocialConnections = () => {
  return (
    <Grid container>
      {socialConnections.map((connection, index) => {
        return (
          <Grid item key={index}>
            <IconButton
              color="primary"
              onClick={() => openNewTab(connection?.url)}
            >
              {connection.icon}
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
};
