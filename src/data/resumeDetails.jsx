const BLR_PLACE = "Bengaluru, India";
const DVG_PLACE = "Davangere, India";

export const EDU_DETAILS = "educationDetails";
export const EXPERIENCE_DETAILS = "experienceDetails";
export const SKILLS_DETAILS = "skillsDetails";
export const PROJECT_DETAILS = "projectDetails";
export const INTEREST_DETAILS = "interestDetails";

const educationDetails = [
  {
    name: "PESU/PESIT College of Engineering",
    place: BLR_PLACE,
    year: "2014-2018",
    description: "Bachelor of Computer Science",
  },
  {
    name: "Sir MV Pre-University",
    place: DVG_PLACE,
    year: "2012-2014",
    description: "12th Grade in Computer Science",
  },
];

const experienceDetails = [
  {
    name: "Commscope Networks Private Limited",
    place: `Engineer II,  ${BLR_PLACE}`,
    year: "2018-2022",
    description:
      "I've ~3.5 years of experience as front-end developer. Contributed towards implementation of  various features for customer’s internal web application.",
  },
];

const skillsDetails = [
  { name: "HTML", score: "90%" },
  { name: "CSS", score: "90%" },
  { name: "JavaScript", score: "90%" },
  { name: "React.js", score: "80%" },
  { name: "Redux", score: "80%" },
  { name: "Express.js", score: "60%" },
  { name: "Firebase", score: "60%" },
];

const projectDetails = [
  {
    name: "Personal Portfolio Website",
    description:
      "This is a personal portfolio website to materialize my details and projects under one roof.",
    link: "https://hosadurga-raviprakash-portfolio.netlify.app/",
    tech: "React.js, Express.js, MUI",
  },
  {
    name: "Tracking app",
    description:
      "This web app allows to add/update activities/tasks. Subscribers will get the push notifications on status of the activities/tasks.",
    link: "https://track-us.netlify.app/",
    tech: "React.js, Express.js, Firebase, MUI",
  },
];

const interestDetails = [
  {
    name: "Sketching",
  },
  {
    name: "Teaching kids",
  },
  {
    name: "Best out of waste DIY",
  },
  {
    name: "Listening to music",
  },
];

export const resumeInfo = {
  educationDetails,
  experienceDetails,
  skillsDetails,
  projectDetails,
  interestDetails,
};
