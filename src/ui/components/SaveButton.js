import React from 'react';
import { Button } from '@mui/material';

const SaveButton = ({ onClick, disabled }) => {
  const buttonStyle = {
    marginTop: '8px', 
  };

  return (
    <Button variant="contained" color="primary" onClick={onClick} disabled={disabled} style={buttonStyle}>
      Save Changes
    </Button>
  );
};

export default SaveButton;
