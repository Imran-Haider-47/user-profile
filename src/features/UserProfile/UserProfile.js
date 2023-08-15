import React, { useState } from 'react';
import { Typography } from '@mui/material';
import AvatarUploader from '../../shared/AvatarUploader';
import UserFullName from '../../ui/components/UserFullName';
import UserEmail from '../../ui/components/UserEmail';
import UserJoiningDate from '../../ui/components/UserJoiningDate';
import SaveButton from '../../ui/components/SaveButton';
import UserProfileLayout from '../../ui/layouts/UserProfileLayout';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserProfile,
  updateFullName,
  updateAvatar,
} from './UserProfileSlice';

const UserProfilePage = () => {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const handleFullNameSave = (newFullName) => {
    dispatch(updateFullName(newFullName));
  };

  const handleAvatarUpload = (newAvatar) => {
    dispatch(updateAvatar(newAvatar));
  };

  return (
    <UserProfileLayout>
      <Typography variant="h4">User Profile</Typography>
      <AvatarUploader
        currentAvatar={userProfile.avatar}
        onUpload={handleAvatarUpload}
      />
      <UserFullName
        fullName={userProfile.fullName}
        onSave={handleFullNameSave}
      />
      <UserEmail email={userProfile.email} />
      <UserJoiningDate initialDate={userProfile.joiningDate} />
      <SaveButton />
    </UserProfileLayout>
  );
};

export default UserProfilePage;
