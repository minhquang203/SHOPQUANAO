// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
        const { user, token, role } = action.payload;
        state.user = {
          id: user.id || user._id,  // Handle cả _id và id
          username: user.username,
          email: user.email
        };
        state.token = token;
        state.role = role || 'user'; // Default role
      },
      logout: (state) => {
        Object.assign(state, initialState); // Reset về initialState
      },
    },
  });

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;