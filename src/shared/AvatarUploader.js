// AvatarUploader.js
import React, { useState } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './AvatarUploaderStyles';

const AvatarUploader = ({ currentAvatar, onUpload, avatarUrl, setAvatarUrl, showCameraIcon, setShowCameraIcon }) => {
  const classes = useStyles();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedAvatar(e.target.result);
          setUploadError('');
          setShowCameraIcon(false); // Hide camera icon after selecting a file
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedAvatar(null);
        setUploadError('Please select a valid image file (JPEG or PNG).');
      }
    }
  };

  const handleUploadClick = () => {
    if (selectedAvatar) {
      onUpload(selectedAvatar);
      setAvatarUrl(selectedAvatar);
      setShowCameraIcon(true); // Show camera icon after uploading
      setSelectedAvatar(null);
    }
    setUploadError(null);
  };

  return (
    <div className={classes.avatarUploader}>
      {showCameraIcon ? (
        <IconButton
          color="primary"
          aria-label="upload avatar"
          component="span"
          className={classes.uploadButton}
          onClick={() => setShowCameraIcon(false)} // Show choose file and upload button
        >
          <PhotoCameraIcon />
        </IconButton>
      ) : (
        <>
          <input
            accept=".png, .jpeg, .jpg"
            id="avatar-upload"
            type="file" 
            onChange={handleAvatarChange}
            style={{ display: 'none' }} // Hide the default file input
          />
          <label htmlFor="avatar-upload">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              className={classes.uploadButton}
            >
              Choose File
            </Button>
          </label>
          {selectedAvatar && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleUploadClick}
              className={classes.uploadButton}
            >
              Upload
            </Button>
          )}
        </>
      )}
      {uploadError && (
        <Typography variant="body2" color="error">
          {uploadError}
        </Typography>
      )}
    </div>
  );
};

export default AvatarUploader;
