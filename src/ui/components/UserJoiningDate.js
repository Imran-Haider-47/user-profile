import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import useStyles from './styles/UserJoiningDateStyles';

const UserJoiningDate = ({ initialDate }) => {
  const classes = useStyles();

  // Convert the initial date string to a Date object
  const dateObject = new Date(initialDate);

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long', // Use 'short' for abbreviated month names
    day: 'numeric',
  };

  // Format the date using toLocaleDateString
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return (
    <Card className={classes.joiningDateContainer}>
      <CardHeader title="Joining Date" />
      <CardContent>
        <p>{formattedDate}</p>
      </CardContent>
    </Card>
  );
};

export default UserJoiningDate;
