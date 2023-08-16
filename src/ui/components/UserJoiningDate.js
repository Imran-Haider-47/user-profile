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
    <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      minHeight: '10vh',
      padding: '5px 10px 10px 10px',
      borderRadius: '25px 25px'
    }}
  >
    <Card className={classes.joiningDateContainer}
    style={{
      backgroundColor: 'lightcyan',
      minHeight: '10vh',
      borderRadius: '30px'
    }}
    >
      <CardHeader title="Joining Date" />
      <CardContent>
        <p>{formattedDate}</p>
      </CardContent>
    </Card>
    </div>
  );
};

export default UserJoiningDate;
