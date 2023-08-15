import React, { useState } from 'react';
import { Button, Avatar, Typography, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './AvatarUploaderStyles'; // Import styles from AvatarUploaderStyles.js

const AvatarUploader = ({ currentAvatar, onUpload }) => {
  const classes = useStyles(); // Use the imported styles
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    if (selectedAvatar) {
      onUpload(selectedAvatar);
    }
  };

  return (
    <div className={classes.avatarUploader}>
      <Avatar
        alt="User Avatar"
        src={selectedAvatar || currentAvatar}
        className={classes.avatar}
      />
      <input
        accept="image/*"
        id="avatar-upload"
        type="file"
        onChange={handleAvatarChange}
        className={classes.input}
      />
      <label htmlFor="avatar-upload">
        <IconButton
          color="primary"
          aria-label="upload avatar"
          component="span"
          className={classes.uploadButton}
        >
          <PhotoCameraIcon />
        </IconButton>
      </label>
      <Typography variant="body2" color="textSecondary">
        Upload a new avatar
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUploadClick}
        disabled={!selectedAvatar}
        className={classes.uploadButton}
      >
        Upload
      </Button>
    </div>
  );
};

export default AvatarUploader;
