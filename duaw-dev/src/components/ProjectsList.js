import React from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import { ThemeProvider } from "@mui/private-theming";
import "../index.css"
import theme from "../theme";

const ProjectsList = (props) => {
  const project = props.projects.map((proj) => {
    return (
      <Link to={proj.name} key={proj.id} style={{textDecoration: 'none'}}>
        <Card  sx={{ maxWidth: 345 }} elevation={3} className= "card" style={cardStyle}>
        <CardActionArea>
        <CardContent style={projectNameStyle}>
        <h2 variant="h5" component="div">
        {proj.name}
        </h2>
        </CardContent>
        <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="Project's image"
        />
        <CardContent>
        <p variant="body2" color="text.secondary">
        {proj.description}
        </p>
        </CardContent>
        <CardActions>
          <Button variant="contained" className="Btn">Learn more</Button>
        </CardActions>
        </CardActionArea>
        </Card>
        </Link>
    );
  });

  return (
    <ThemeProvider theme={theme}>
    <div>
      <div className= "cardHolder">{project}</div>
    </div>
    </ThemeProvider>
  );
};


const projectNameStyle = {
  color: "white",
  backgroundColor: "#0A3147",
};

const cardStyle = {
  backgroundColor: "#E8F3F6",

};


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
