import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';

// Création d'un objet contenant les réducteurs //
const reducer = {
  auth: authReducer,
  profile: profileReducer,
};

// Configure le store avec les reducers //
const store = configureStore({
  reducer: reducer
});

export default store;

