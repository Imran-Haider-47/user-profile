import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, CardHeader } from '@mui/material';
import useStyles from './styles/UserFullNameStyles';

const UserFullName = ({ fullName, onSave }) => {
  const classes = useStyles();
  const [editedFullName, setEditedFullName] = useState(fullName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedFullName(fullName);
  };

  const handleSaveClick = () => {
    onSave(editedFullName);
    setIsEditing(false);
  };

  const handleFullNameChange = (event) => {
    setEditedFullName(event.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '10vh',
        padding: '10px 10px 5px 10px',
        borderRadius: '25px 25px'
      }}
    >
    <Card className={classes.fullNameContainer} 
    style={{
        backgroundColor: 'lightcyan' ,
        minHeight: '10vh',
        padding: '10px',
        borderRadius: '30px'
      }}>
      <CardHeader title="Full Name" />
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              label="Full Name"
              variant="outlined"
              className={classes.textField}
              value={editedFullName}
              onChange={handleFullNameChange}
            />
            <Button variant="outlined" color="primary" onClick={handleSaveClick} className={classes.button}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancelClick} className={classes.button}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <div>{fullName}</div>
            <Button variant="outlined" color="primary" onClick={handleEditClick} className={classes.button}>
              Edit
            </Button>
          </>
        )}
      </CardContent>
    </Card>
    </div>
  );
};

export default UserFullName;
