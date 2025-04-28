// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  role: null,
};

// src/redux/authSlice.js
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setCredentials: (state, action) => {
        const { user, token, role } = action.payload;
        state.user = {
          id: user._id || user.id,
          username: user.username,
          email: user.email
        };
        state.token = token;
        state.role = role || 'user';
      },
      logout: (state) => {
        Object.assign(state, initialState);
      },
    },
  });

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;