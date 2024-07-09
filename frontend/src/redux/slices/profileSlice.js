import { createSlice } from '@reduxjs/toolkit';

// Fonction pour obtenir le token de l'utilisateur
const getToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token');
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userProfile: {
      firstName: '',
      lastName: '',
      userName: '',
      email: ''
    },
    error: null,
  },
  reducers: {
    setUserProfile(state, action) {
      state.userProfile = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetUserProfile(state) {
      state.userProfile = {
        firstName: '',
        lastName: '',
        userName: '',
        email: ''
      };
    },
    updateUserNameInState(state, action) {
      state.userProfile.userName = action.payload;
      state.error = null;
    }
  }
});

export const { setUserProfile, setError, resetUserProfile, updateUserNameInState } = profileSlice.actions;

// Action pour récupérer le profil utilisateur
export const fetchUserProfile = () => async dispatch => {
  const token = getToken();
  if (!token) {
    dispatch(setError('No token found'));
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    dispatch(setUserProfile(data.body));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Action pour mettre à jour le nom d'utilisateur
export const updateUserName = (userName) => async (dispatch, getState) => {
  const token = getToken();
  if (!token) {
    dispatch(setError('No token found'));
    return;
  }

  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    });

    if (!response.ok) {
      throw new Error('Failed to update user name');
    }

    dispatch(updateUserNameInState(userName));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default profileSlice.reducer;
