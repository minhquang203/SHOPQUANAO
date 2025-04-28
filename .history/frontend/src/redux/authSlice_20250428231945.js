import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    role: null, // 'user' hoặc 'admin'
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, role } = action.payload;
      state.user = user;
      state.token = token;
      state.role = role; // Thêm role vào state
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentRole = (state) => state.auth.role; // Selector để lấy role

export default authSlice.reducer;