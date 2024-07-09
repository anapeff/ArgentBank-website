import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    token: null,
  },
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    userLogin(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    userLogout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); 
      sessionStorage.removeItem('token'); 
    },
  },
});

export const { setLoggedIn, userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
