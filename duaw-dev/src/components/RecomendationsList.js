import React from 'react';
import { Typography } from '@mui/material';


const RecomendationItem = ({recomendation}) => {

    return (
        <Typography sx={{ color:"text.primary", border: 1, borderRadius: 1, margin:'10px 10px 5px 0px', padding:'1px 10px' }} >
        {recomendation}
      </Typography>
    );
   
}



const RecomendationsList = (props) => {
    return props.recomendations.map((recomendation) => (
     
        <RecomendationItem key={recomendation.id} recomendation={recomendation} />
        
     
    ));
  };



export default RecomendationsList;
