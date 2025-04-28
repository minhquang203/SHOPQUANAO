// src/redux/authSelectors.js
import { createSelector } from '@reduxjs/toolkit';

// Selector cơ bản
export const selectAuthState = (state) => state.auth;

// Selector được memoize
export const selectCurrentUser = createSelector(
  selectAuthState,
  (auth) => auth.user
);

export const selectCurrentRole = createSelector(
  selectAuthState,
  (auth) => auth.role
);

export const selectAuthData = createSelector(
  [selectCurrentUser, selectCurrentRole],
  (user, role) => ({ user, role })
);