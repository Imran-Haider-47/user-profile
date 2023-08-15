// UserProfilePage.js
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import AvatarUploader from '../../shared/AvatarUploader';
import UserFullName from '../../ui/components/UserFullName';
import UserEmail from '../../ui/components/UserEmail';
import UserJoiningDate from '../../ui/components/UserJoiningDate';
import SaveButton from '../../ui/components/SaveButton';
import UserProfileLayout from '../../ui/layouts/UserProfileLayout';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserProfile, updateFullName, updateAvatar } from './UserProfileSlice';

import sampleImage from '../../../public/images/sample_img.png';

const UserProfilePage = () => {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState(sampleImage);
  const [showCameraIcon, setShowCameraIcon] = useState(true); // Add state for showing camera icon

  const handleFullNameSave = (newFullName) => {
    dispatch(updateFullName(newFullName));
  };

  const handleAvatarUpload = async (newAvatar) => {
    try {
      await dispatch(updateAvatar(newAvatar));
      setAvatarUrl(newAvatar);
      setShowCameraIcon(true); // Show camera icon after uploading
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '90vh',
        padding: '10px',
      }}
    >
      <UserProfileLayout>
        <Box textAlign="center">
          <Typography variant="h4" align="center">
            User Profile
          </Typography>
          <img
            src={avatarUrl}
            alt="User Avatar"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '200px',
              maxHeight: '200px',
              borderRadius: '50%',
            }}
          />

          <AvatarUploader
            currentAvatar={userProfile.avatar}
            onUpload={handleAvatarUpload}
            avatarUrl={avatarUrl}
            setAvatarUrl={setAvatarUrl}
            showCameraIcon={showCameraIcon} // Pass the showCameraIcon prop
            setShowCameraIcon={setShowCameraIcon} // Pass the setShowCameraIcon prop
          />

          <UserFullName fullName={userProfile.fullName} onSave={handleFullNameSave} />
          <UserEmail email={userProfile.email} />
          <UserJoiningDate initialDate={userProfile.joiningDate.toISOString()} />
          <SaveButton />
        </Box>
      </UserProfileLayout>
    </div>
  );
};

export default UserProfilePage;
