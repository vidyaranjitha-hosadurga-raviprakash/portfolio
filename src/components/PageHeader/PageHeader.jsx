import React from "react";
import { Typography, Grid } from "@mui/material";

import { Divider } from "components";
import { headingVariants, mainHeadingStyle } from "styles/commonStyles";

export const PageHeader = ({ info: { heading = "", subheading = "" } }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      spacing={1}
    >
      <Grid item>
        <Grid container item direction="column" alignItems="center" spacing={1}>
          <Grid item>
            <Typography
              variant={headingVariants.mainHeading}
              sx={{
                mainHeadingStyle,
              }}
            >
              {heading}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant={headingVariants.caption}
              sx={{
                letterSpacing: 5,
              }}
            >
              {subheading}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Divider></Divider>
      </Grid>
    </Grid>
  );
};
