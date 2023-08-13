import React, { useState } from 'react';
import { Card, CardContent, CardHeader, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import useStyles from './UserJoiningDateStyles';

const UserJoiningDate = ({ initialDate, onSave }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSaveClick = () => {
    onSave(selectedDate);
  };

  return (
    <Card className={classes.joiningDateContainer}>
      <CardHeader title="Joining Date" />
      <CardContent>
        <DatePicker
          label="Select Joining Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <button onClick={handleSaveClick}>Save</button>
      </CardContent>
    </Card>
  );
};

export default UserJoiningDate;
