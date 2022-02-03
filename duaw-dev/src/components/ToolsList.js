import { Typography } from '@mui/material';
import React from 'react';




const ToolItem = ({ tool }) =>{
  return (
   
      <Typography sx={{ color:"text.primary", border: 1, borderRadius: 1, margin:'10px 10px 5px 0px', padding:'1px 10px' }} >
        {tool}
      </Typography>
    
      
  );
}

const ToolsList= (props) => {
  return props.tools.map((tool) => (
     
     <ToolItem key={tool.id} tool={tool} />
     
   ));
 };


export default ToolsList;
