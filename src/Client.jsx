import React from 'react'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import App from './App';
import Chat from './Chat/Chatbot/Chat';


function Client() {
  return (
    <Box>
        <Grid container spacing={2}>
        <Grid xs={8}>
            <App/>
        </Grid>
        <Grid xs={4}>
           <Chat/>
        </Grid>
        
</Grid>

    </Box>
    
  )
}

export default Client