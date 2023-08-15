import React from 'react';
import { Container, Grid, Paper } from '@mui/material';

const UserProfileLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          {/* Sidebar or additional information can be placed here */}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper elevation={3} style={{ padding: '1rem' }}>
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfileLayout;
