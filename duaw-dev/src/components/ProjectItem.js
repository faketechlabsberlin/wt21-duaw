import React from "react";
import { Link } from "react-router-dom";
import {
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
  
  
  
  
  
  const ProjectItem = ({ name, created_at, description }) => {
  const classes = useStyles ()


  return (
    <Link 
    to={name}
    style={cardsStyle}
    >
      <Card
        sx={{ maxWidth: 444 }}
        elevation={3}
        className={classes.Link}
      >
        <div>
          <CardContent style={projectNameStyle}>
            <Typography variant="body" style={{fontSize:"1.1rem", fontWeight:"400", textTransform:"capitalize", letterSpacing: "1px"}}>
            {name}
            </Typography>
            <Typography color="text.secondary" variant="caption" display="block" style={{fontWeight:"light"}}>
            {created_at}
            </Typography>
          </CardContent>
          <Box>
          <CardMedia
            component="img"
            height="200"
            image={getImage(name)}
            alt="Project's image"
            style={{marginBottom: "10px"}}
          />
          </Box>
          <CardContent>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
          <CardActions style={{margin: "15px 5px"}}>
            <Button variant="contained" className="Btn" disableElevation style={{padding: "7px 162px", margin: "auto"}} >
              Learn more
            </Button>
          </CardActions>
        </div>
      </Card>
    </Link>
  );
};

const cardsStyle = {
  textDecoration: "none", 
  marginBottom:"90px",
  
};

const projectNameStyle = {
  height:"35px",
};


export default ProjectItem;
