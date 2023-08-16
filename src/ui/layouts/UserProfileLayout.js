import React from "react";
import { Container, Grid, Paper } from "@mui/material";

const UserProfileLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "0.1rem"}}>
        <Grid item xs={12} sm={8} >
          <Paper
            elevation={3}
            style={{
              padding: "1rem",
              backgroundColor: 'lightgrey',
              borderRadius:'50px',
            }} 
          >
            {children}
          </Paper>
        </Grid>
    </Container>
  );
};

export default UserProfileLayout;
