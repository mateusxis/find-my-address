import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../redux/notificationSlice';
import addressReducer from '../redux/addressSlice';

export default configureStore({
  reducer: {
    notification: notificationReducer,
    address: addressReducer
  }
});
