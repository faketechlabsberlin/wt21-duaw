import React from "react";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  Button,
  CardMedia,
  CardActions,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import "../index.css";
import {getImage} from '../api'
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  Link:{ 
      '&:hover': {
          backgroundColor: "#ffffff",
      },
  },
});
  
  
  
  
  
  const ProjectItem = ({ project }) => {
  const classes = useStyles ()

  console.log(project)

  return (
    <Link 
    to={project.name} 
    key={project.id} 
    style={cardsStyle}
    >
      <Card
        sx={{ maxWidth: 444 }}
        elevation={3}
        className={classes.Link}
      >
        <CardActionArea >
          <CardContent style={projectNameStyle}>
            <Typography variant="body" style={{fontSize:"1.1rem", fontWeight:"400", textTransform:"capitalize", letterSpacing: "1px"}}>
            {project.name}
            </Typography>
            <Typography color="text.secondary" variant="caption" display="block" style={{fontWeight:"light"}}>
            {project.created_at}
            </Typography>
          </CardContent>
          <Box>
          <CardMedia
            component="img"
            height="200"
            image={getImage(project.name)}
            alt="Project's image"
            style={{marginBottom: "10px"}}
          />
          </Box>
          <CardContent>
            <Typography variant="body2">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions style={{margin: "15px 5px"}}>
            <Button variant="contained" className="Btn" disableElevation style={{padding: "7px 162px", margin: "auto"}}>
              Learn more
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
};

const ProjectsList = (props) => {
  return props.projects.map((project) => (
    
      <ProjectItem key={project.id} project={project} />
    
  ));
};

const cardsStyle = {
  textDecoration: "none", 
  marginBottom:"90px",
  
};

const projectNameStyle = {
  // color: "white",
  // backgroundColor: "#EB2E4E",
  height:"35px",
};

// const cardStyle = {
  
// };

export default ProjectsList;

// console.log(props.projects);

// const project = props.projects.map((proj) =>{
//     return proj.description
// });

// const headingStyle = {
//   textAlign: "center",
//   color: "white",
//   backgroundColor: "black",
// };

// const cardStyle = {
//   padding: "40px",
//   backgroundColor: "#fffff",
//   maxWidth: "550px",
//   borderRadius: "20px",
//   margin: "20px auto",
//   boxShadow:
//     "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
// };
