import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CircularProgress, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AvatarUploader from '../shared/AvatarUploader';
import useStyles from './styles/UserAvatarStyles';

const UserAvatar = ({ avatarUrl, onAvatarChange }) => {
  const classes = useStyles();
  const [uploading, setUploading] = useState(false);
  const [showUploadButton, setShowUploadButton] = useState(true);

  const handleAvatarUpload = async (file) => {
    try {
      setUploading(true);
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onAvatarChange(file);
      setShowUploadButton(false);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleUploadButtonClick = () => {
    setShowUploadButton(true);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Avatar" />
      <CardContent>
        <div className={classes.avatarContainer}>
          {uploading ? (
            <div className={classes.loading}>
              <CircularProgress />
            </div>
          ) : (
            <>
              <Avatar alt="User Avatar" src={avatarUrl} className={classes.avatar} />
              {showUploadButton && (
                <AvatarUploader onUpload={handleAvatarUpload}>
                  <IconButton
                    color="primary"
                    aria-label="upload avatar"
                    component="span"
                    className={classes.cameraIcon}
                  >
                    <PhotoCameraIcon />
                  </IconButton>
                </AvatarUploader>
              )}
            </>
          )}
        </div>
        {showUploadButton && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadButtonClick}
            disabled={uploading}
            className={classes.uploadButton}
          >
            Save Avatar
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UserAvatar;
