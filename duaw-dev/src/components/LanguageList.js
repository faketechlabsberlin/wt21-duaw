import { Typography } from '@mui/material';
import React from 'react';

const LanguageItem = ({ item }) =>{
    return (
    
        <Typography variant='h6'>
          {item}
        </Typography>
        
    );
  }
  
  const LanguageList= (props) => {
    return props.languages.map((item) => (
       
       <LanguageItem key={item.id} item={item} />
       
     ));
   };

export default LanguageList;
