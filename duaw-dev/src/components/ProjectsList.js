import React from "react";
import "../index.css";
import ProjectItem from "./ProjectItem";
  

const ProjectsList = (props) => {
  return props.projects.map((project) => (
   
      <ProjectItem key={project.id} name={project.name} created_at={project.created_at} description={project.description} />
      
   
  ));
};


export default ProjectsList;

