import React, { useState } from "react";
import { Typography, Grid, Container, Box, Stack } from "@mui/material";

import { ResumeDisplayDetails, PageHeader } from "components";

import { pageContainer } from "styles/commonStyles";
import "components/Resume/Resume.css";

import educationSvg from "assets/image/education.svg";
import workExperinceSvg from "assets/image/work-experience.svg";
import skillsSvg from "assets/image/skills.svg";
import projectsSvg from "assets/image/projects.svg";
import interestsSvg from "assets/image/interests.svg";

import {
  EDU_DETAILS,
  EXPERIENCE_DETAILS,
  SKILLS_DETAILS,
  PROJECT_DETAILS,
  INTEREST_DETAILS,
} from "data/resumeDetails";
const resumeInfoField = [
  {
    label: "Education",
    path: educationSvg,
    details: EDU_DETAILS,
  },
  {
    label: "Work Experience",
    path: workExperinceSvg,
    details: EXPERIENCE_DETAILS,
  },
  {
    label: "Skills",
    path: skillsSvg,
    details: SKILLS_DETAILS,
  },
  {
    label: "Projects",
    path: projectsSvg,
    details: PROJECT_DETAILS,
  },
  {
    label: "Interests",
    path: interestsSvg,
    details: INTEREST_DETAILS,
  },
];

export const Resume = () => {
  const [selectedResumeItem, setSelectedResumeItem] = useState(0);

  return (
    <Container
      sx={{
        ...pageContainer,
      }}
    >
      <Stack spacing={5}>
        <PageHeader info={{ heading: "Resume", subheading: "" }} />
        <Grid container className="resume-card">
          <Grid item>
            <Box className="resume-container">
              <Box className="resume-sidebar-container">
                <Box className="resume-sidebar-icons"></Box>
                <Box className="resume-sidebar-items">
                  {resumeInfoField.map((field, index) => {
                    return (
                      <Box
                        key={index}
                        className={`resume-sidebar-item ${
                          selectedResumeItem === index ? "selected-item" : ""
                        }`}
                        onClick={() => setSelectedResumeItem(index)}
                      >
                        <img
                          className="resume-sidebar-item-icon"
                          src={field.path}
                          alt="404"
                        />
                        <Typography
                          component="span"
                          className="resume-sidebar-item-label"
                          variant="body1"
                        >
                          {field.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              padding: "1rem 1rem 2rem 1rem",
              backgroundColor: "",
            }}
            xs={12}
            sm={6}
            md={6}
            lg={8}
          >
            <ResumeDisplayDetails
              detailsType={resumeInfoField[selectedResumeItem].details}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
