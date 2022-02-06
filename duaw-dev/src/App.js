import React, { useState, useEffect } from "react";
import ProjectsList from "./components/ProjectsList";
import { getRepos } from "./api";
import "./index.css";
import { Typography } from "@mui/material";

const App = () => {
  const [fetchedRepos, setFetchedRepos] = useState([]);

  useEffect(() => {
    getRepos().then((repos) => setFetchedRepos(repos));
  }, []);

  return(
    <>
    <div style= {heroStyle}>
      <Typography variant="h3" style={{fontWeight:"600", textTransform:"capitalize", letterSpacing: "1px", margin:"20px 0px 40px 0px"}}>
        Welcome to DUAW
      </Typography>
      <Typography variant="body1">
        Each semester, students from the TechLabs bootcamps work together on astonishing final projects. 
        These projects feature students from web development, UX design, data science and artificial intelligence, and DUAW is the place where they are showcased! 
      </Typography>
      <div style={{paddingTop:"8px"}}>
      <Typography variant="body1" >
        Browse through projects from various semesters and locations, filter by categories, upvote projects and get in conctact with the alumni students!
      </Typography>
      </div>
    </div>
    <div className="cardHolder">
      <ProjectsList projects={fetchedRepos} /> 
    </div>
    </>
  ) 
};

const heroStyle = {
  width: "960px",
  padding: "70px 50px",
  height:"250px",
};

export default App;
