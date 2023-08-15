import React, { useState } from 'react';
import { Card, CardContent, CardHeader, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/lab';
import useStyles from './styles/UserJoiningDateStyles';

const UserJoiningDate = ({ initialDate, onSave }) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSaveClick = () => {
    onSave(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleSaveClick(); 
  };

  return (
    <Card className={classes.joiningDateContainer}>
      <CardHeader title="Joining Date" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <DatePicker
            label="Select Joining Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button variant="outlined" color="primary" type="submit" className={classes.button}>
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserJoiningDate;
