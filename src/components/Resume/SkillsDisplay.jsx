import React from "react";
import { Grid, Box, Typography } from "@mui/material";

import { resumeInfo, SKILLS_DETAILS } from "data/resumeDetails";

export const SkillsDisplay = () => {
  const details = resumeInfo[SKILLS_DETAILS];

  return (
    <Grid container pl={2}>
      {details.map(({ name, score }, index) => {
        return (
          <Grid
            key={index}
            container
            item
            direction="column"
            xs={12}
            sm={12}
            md={5}
            lg={6}
            justifyContent="space-around"
          >
            <Grid item>
              <ul>
                <li>
                  <Typography variant="h6">{name}</Typography>
                </li>
              </ul>
            </Grid>

            <Grid item className="max-skill-percentage">
              <Box
                className="score-percentage-bar"
                style={{ width: score }}
              ></Box>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
