// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      token: null,
      role: null,
    },
    reducers: {
      setCredentials: (state, action) => {
        const { user, token, role } = action.payload;
        state.user = {
          id: user._id || user.id, // Xử lý cả _id và id
          username: user.username,
          email: user.email
        };
        state.token = token;
        state.role = role || 'user';
      },
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
      },
    },
  });
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;