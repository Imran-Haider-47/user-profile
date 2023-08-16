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

// Import components from @mui/material for custom alert
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors'; // Import green color from MUI colors

const UserProfilePage = () => {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const handleFullNameSave = (newFullName) => {
    dispatch(updateFullName(newFullName));
  };

  const handleAvatarUpload = async (newAvatar) => {
    try {
      await dispatch(updateAvatar(newAvatar));
      setAvatarUrl(newAvatar);
      setShowCameraIcon(true);
      setShowChooseButton(false);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  const initialAvatarUrl = '/images/sample_img.png';
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [showCameraIcon, setShowCameraIcon] = useState(true);
  const [showChooseButton, setShowChooseButton] = useState(false);

  // State for custom alert dialog
  const [showAlert, setShowAlert] = useState(false);

  // Function to open the custom alert dialog
  const openAlert = () => {
    setShowAlert(true);
  };

  // Function to handle "Save Changes" button click
  const handleSaveChanges = () => {
    setShowCameraIcon(true);
    setShowChooseButton(false);
    openAlert();
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        minHeight: '90vh',
        padding: '10px',
        borderRadius: '50px'
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
            showCameraIcon={showCameraIcon}
            showChooseButton={showChooseButton}
            setShowCameraIcon={setShowCameraIcon}
            setShowChooseButton={setShowChooseButton}
          />

          <UserFullName fullName={userProfile.fullName} onSave={handleFullNameSave} />
          <UserEmail email={userProfile.email} />
          <UserJoiningDate initialDate={userProfile.joiningDate.toISOString()} />
          <SaveButton onClick={handleSaveChanges} />
        </Box>
      </UserProfileLayout>

      {/* Custom alert dialog */}
      <Dialog open={showAlert} onClose={() => setShowAlert(false)} >
        <DialogTitle sx={{ backgroundColor: green[500], color: '#fff' }}>Changes Saved!</DialogTitle>
        <DialogContent sx={{ backgroundColor: green[100] }}>
          <Typography>Your changes have been successfully saved.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAlert(false)} style={{ backgroundColor: green[200] }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserProfilePage;
