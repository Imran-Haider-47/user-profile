import { createSlice } from '@reduxjs/toolkit';
import UserProfileAPI from './UserProfileAPI';

const initialState = {
  fullName: 'Imran',
  email: 'testing@gmail.com',
  avatar: '/default-avatar.png',
  joiningDate: new Date('2023-01-01'),
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateFullName: (state, action) => {
      state.fullName = action.payload;
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export const { updateFullName, updateAvatar } = userProfileSlice.actions;

export const selectUserProfile = (state) => state.userProfile;

export const saveUserProfileChanges = (newData) => async (dispatch) => {
  try {
    const updatedData = await UserProfileAPI.saveUserProfileChanges(newData);
    dispatch(updateFullName(updatedData.fullName));
    dispatch(updateAvatar(updatedData.avatar));
  } catch (error) {
    console.error('Error saving user profile changes:', error);
  }
};

export default userProfileSlice.reducer;
