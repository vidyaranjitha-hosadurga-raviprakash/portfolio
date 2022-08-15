import React from "react";
import { Grid, Typography, Button, Divider } from "@mui/material";

import { SkillsDisplay } from "components/Resume";
import {
  resumeInfo,
  SKILLS_DETAILS,
  PROJECT_DETAILS,
} from "data/resumeDetails";

const resumeButtonStyles = {
  borderRadius: "2rem",
  margin: "2rem 0rem",
  position: "relative",
  left: "6rem",
};
export const ResumeDisplayDetails = ({ detailsType }) => {
  const details = resumeInfo[detailsType];

  const getYearOrLinkButton = (data) => {
    switch (detailsType) {
      case PROJECT_DETAILS: {
        return (
          <Button
            variant="outlined"
            href={data}
            target="_"
            sx={resumeButtonStyles}
          >
            Live link
          </Button>
        );
      }
      default: {
        return (
          <Button
            variant="contained"
            sx={{ ...resumeButtonStyles, pointerEvents: "none" }}
          >
            {data}
          </Button>
        );
      }
    }
  };

  return (
    <>
      {detailsType === SKILLS_DETAILS ? (
        <SkillsDisplay />
      ) : (
        <Grid container direction="column" spacing={1} sx={{ background: "" }}>
          {details.map(
            ({ name, year, link, place, description, tech, score }, index) => {
              return (
                <Grid container item spacing={2} key={index}>
                  <Grid item xs={10} md={12} lg={8} sx={{ background: "" }}>
                    <ul>
                      <li>
                        <Typography variant="h6" color="primary">
                          {name}
                        </Typography>
                        {place && (
                          <Typography
                            variant="caption"
                            sx={{ letterSpacing: 2 }}
                          >
                            {place}
                          </Typography>
                        )}
                        {description && (
                          <>
                            <Divider />
                            <Typography variant="body1" mt={3}>
                              {description}
                            </Typography>
                          </>
                        )}

                        {tech && (
                          <Typography mt={3} sx={{ fontWeight: "bold" }}>
                            Tech-stack : {tech}
                          </Typography>
                        )}
                      </li>
                    </ul>
                  </Grid>
                  {(year || link) && (
                    <Grid item lg={4}>
                      {year
                        ? getYearOrLinkButton(year)
                        : getYearOrLinkButton(link)}
                    </Grid>
                  )}
                </Grid>
              );
            }
          )}
        </Grid>
      )}
    </>
  );
};
