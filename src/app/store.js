import { configureStore } from '@reduxjs/toolkit';
import userProfileReducer from '../features/UserProfile/UserProfileSlice';

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
});
