import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { ReactComponent as NoConnection } from "../assets/image/NoConnection.svg";

const NetworkError = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ height: '100vh', textAlign: 'center' }}
    >
      <Box 
        sx={{ 
          width: { xs: '80%', sm: '60%', md: '20%' }, 
          maxWidth: 400, 
          mb: 2 
        }}
      >
        <NoConnection style={{ width: '100%', height: 'auto' }} />
      </Box>
      <Typography variant="h3" color="textSecondary">
        <strong>No Internet</strong>
      </Typography>
      <hr/>
      <Typography variant="h6" color="textSecondary">
        Oops! It looks like you're not connected to the internet.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Please check your network connection and try again.
      </Typography>
    </Grid>
  );
}

export default NetworkError;
