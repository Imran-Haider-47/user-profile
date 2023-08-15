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
    <Card className={classes.emailContainer}> 
      <CardHeader title="Email Address" />
      <CardContent>
        {isValidEmail(email) ? (
          <Typography color="textPrimary">{email}</Typography>
        ) : (
          <Typography color="error">Invalid email address</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserEmail;
