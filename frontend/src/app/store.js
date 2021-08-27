import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import profileReducer from '../features/profile/profileSlice';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    profile: profileReducer
  }
});
