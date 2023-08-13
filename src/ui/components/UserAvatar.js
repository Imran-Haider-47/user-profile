import React, { useState } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CircularProgress } from '@mui/material';
import AvatarUploader from '../shared/AvatarUploader';
import useStyles from './UserAvatarStyles';

const UserAvatar = ({ avatarUrl, onAvatarChange }) => {
  const classes = useStyles();
  const [uploading, setUploading] = useState(false);

  const handleAvatarUpload = async (file) => {
    try {
      setUploading(true);
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      onAvatarChange(file);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Avatar" />
      <CardContent>
        {uploading ? (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <Avatar alt="User Avatar" src={avatarUrl} className={classes.avatar} />
            <AvatarUploader onUpload={handleAvatarUpload} />
            <Button variant="contained" color="primary" disabled={uploading}>
              Save Avatar
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default UserAvatar;
