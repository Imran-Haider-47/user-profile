import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import useStyles from './styles/UserEmailStyles';

const UserEmail = ({ email }) => {
  const classes = useStyles();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '10vh',
        padding: '5px 10px 5px 10px',
        borderRadius: '25px 25px'
      }}
    >
    <Card className={classes.emailContainer} 
    style={{
        backgroundColor: 'lightcyan',
        minHeight: '10vh',
        borderRadius: '30px'
      }} > 
      <CardHeader title="Email Address" />
      <CardContent>
        {isValidEmail(email) ? (
          <Typography color="textPrimary">{email}</Typography>
        ) : (
          <Typography color="error">Invalid email address</Typography>
        )}
      </CardContent>
    </Card>
    </div>
  );
};

export default UserEmail;
