import React from "react";
import { Typography, IconButton, Grid, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Team = ({ member }) => {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 2 }}>
        <Grid item xs={2} md={2} style={{ margin: "12px 0px" }}>
          <Box
            component="img"
            sx={{
              height: 38,
            }}
            alt="Logo"
            src="/TRACK-PINK-UX-USER-EXPERIENCE.svg"
          />
        </Grid>
        <Grid item xs={10} md={10}>
          <Typography variant="h6" style={{ marginLeft: "10px" }}>
            {member.nameFull}
          </Typography>
          <IconButton
            sx={{ color: "text.primary" }}
            onClick={() => window.open(member.personalPage)}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            sx={{ color: "text.primary" }}
            onClick={() => window.open(member.githubUrl)}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{ color: "text.primary" }}
            onClick={() => window.open(member.linkedinUrl)}
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

const TeamUx = (props) => {
  return props.teams
    .filter((item) => item.track === "UX")
    .map((member) => <Team key={member.githubName} member={member} />);
};

export default TeamUx;
