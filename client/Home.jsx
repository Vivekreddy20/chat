import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Stack, Typography } from '@mui/material';

const Home = () => {
  return (
   <Stack>
     <Typography
    variant={"h1"}
     sx={{
      color:"white",
      textTransform:"capitalize"
     }}
    >
      welcome to socialize
    </Typography>
    <Typography
    variant='h5'
     color={"primary"}
     sx={{
      
     }}
    >
      select a person to chat
    </Typography>
   </Stack>
    
  )
}

export default AppLayout()(Home);
