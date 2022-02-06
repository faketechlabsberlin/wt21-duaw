import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from "react-dom";
import { getInfo, getRecomendations, getRepo } from "../api";
import ToolsList from "./ToolsList";
import { 
  Grid,
  Typography,  
  Card, 
  CardContent, 
  Button, 
} from "@mui/material";
import TeamUx from "./TeamUx";
import TeamWd from "./TeamWd";
import TeamDs from "./TeamDs";
import { Box } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import RecomendationsList from "./RecomendationsList";







function useRepoInfo(repositoryName) {
  const [fetchedRepo, setFetchedRepo] = useState(null);
  const [fetchedInfo, setFetchedInfo] = useState(null);
  const [fetchedRecomendations, setFetchedRecomendations] = useState(null)
  useEffect(() => {
    Promise.all([
      getRepo(repositoryName),
      getInfo(repositoryName),
      getRecomendations()
    ]).then(([repo, info, recomendations]) => {
      unstable_batchedUpdates(() => {
        setFetchedRepo(repo)
        setFetchedInfo(info)
        setFetchedRecomendations(recomendations)
      })
      console.log(recomendations)
    })
  }, [repositoryName]);
  return [fetchedRepo, fetchedInfo, fetchedRecomendations]
}


const ProjectDetail = () => {
  const {repositoryName} = useParams();
  const [fetchedRepo, fetchedInfo, fetchedRecomendations] = useRepoInfo(repositoryName)

  if (fetchedRecomendations !== null){
    console.log(fetchedRecomendations[repositoryName])
  }


  return (
    <div>
      {fetchedRepo === null && 'loading...'}
      {fetchedRecomendations === null && 'loading...'}
      {fetchedRepo && (
        
        <Box sx={{ flexShrink: 1 }}>
          <Grid container spacing={{xs:1, md:2}} >

            <Grid item xs={8} md={9} style={{ padding:"70px 50px"}}>
                <CardContent >
                  <Typography variant='h3' style={{fontWeight:"600", textTransform:"capitalize", letterSpacing: "1px"}}>
                  {fetchedInfo.nameFull}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography color='primary' sx={{ border: 1, borderRadius: 1, display: 'inline', margin:'10px', padding:'1px 10px' }}>
                  {fetchedInfo.location}
                  </Typography>
                  <Typography color='primary' sx={{ border: 1, borderRadius: 1, display: 'inline', margin:'10px', padding:'1px 10px' }}>
                  {fetchedInfo.semester}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography variant='subtitle2'>{fetchedRepo.updated_at}</Typography>
                </CardContent>
                <CardContent>
                  <Typography variant='body1'>Long Description: {fetchedRepo.description}</Typography>
                </CardContent>
                <CardContent>
                <Grid container spacing={{xs:1, md:2}} >
                <Grid item xs={12} sm={12} md={4}>
                    <Button startIcon={<WhatshotIcon/>} size="large" variant="contained" className="Btn" style={{ padding:"10px 40px"}} >
                    Try out the prototype
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Button 
                    startIcon={<PlayCircleOutlineIcon/>} 
                    size="large" 
                    variant="contained" 
                    className="Btn" 
                    style={{ padding:"10px 40px"}}
                    onClick= {()=> window.open(fetchedRepo.html_url)}
                    >
                      Check out our video
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Button 
                    startIcon={<GitHubIcon/>} 
                    size="large" 
                    variant="contained" 
                    className="Btn" 
                    style={{ padding:"10px 40px"}}
                    onClick= {()=> window.open(fetchedRepo.html_url)}
                    >
                      Visit Github repository
                    </Button>
                    </Grid>
                  </Grid>
                  </CardContent>
            </Grid>
            
          
            <Grid item xs={4} md={3}>

                  <Card 
                  sx={{ maxWidth: 300, margin:"70px 0px", padding:"20px" }}
                  elevation={3}
                  >
                    <CardContent>
                      <Typography variant='h6' style={{fontWeight:"600", padding:"10px 0px"}}>
                        Project Team
                      </Typography>
                      <Typography variant='body1' style={{fontWeight:"600", padding:"20px 0px", display:"block"}} >
                        Data Science Team
                      </Typography>
                        <TeamDs teams={fetchedInfo.membersContacts} />
                      <br/>
                      <Typography variant='body1' style={{fontWeight:"600", padding:"20px 0px", display:"block"}}>
                        Web Development Team
                      </Typography>
                        <TeamWd teams={fetchedInfo.membersContacts} />
                      <br/>
                      <Typography variant='body1' style={{fontWeight:"600", padding:"20px 0px", display:"block"}}>
                        UX Team
                      </Typography>
                        <TeamUx teams={fetchedInfo.membersContacts} />
                      <br/>
                    </CardContent>
                  </Card>

                  <Card 
                  sx={{ maxWidth: 300, margin:"70px 0px", padding:"20px" }} 
                  elevation={3}
                  >
                    <CardContent>
                      <Typography variant='h6' style={{ fontWeight:"600" }}>
                        Tools used
                          <Grid style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems:"flex-start"}}>
                            <ToolsList tools={fetchedInfo.tools}/>
                          </Grid>
                      </Typography>
                      <br/>
                            <RecomendationsList recomendations={fetchedRecomendations[repositoryName]}/>

                      <Typography variant='h6' style={{ fontWeight:"600" }}>
                        Languages used
                          <Grid style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems:"flex-start"}}>
                            <Typography 
                            sx={{ color:"text.primary", border: 1, borderRadius: 1, margin:'10px 10px 5px 0px', padding:'1px 10px' }}
                            >
                              {fetchedRepo.language}
                            </Typography>
                          </Grid>
                      </Typography>
                    </CardContent>
                  </Card>

                  

            </Grid>
          </Grid>
        </Box>

)}
      

      </div>
  );
}

export default ProjectDetail;
