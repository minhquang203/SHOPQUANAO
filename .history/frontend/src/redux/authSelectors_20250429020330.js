// src/redux/authSelectors.js
import { createSelector } from '@reduxjs/toolkit';

// Selector cơ bản
const selectAuthState = (state) => state.auth;

// Selector được memoize
export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.user
);

export const selectCurrentToken = createSelector(
  [selectAuthState],
  (auth) => auth.token
);

export const selectCurrentRole = createSelector(
  [selectAuthState],
  (auth) => auth.role
);

export const selectIsAuthenticated = createSelector(
  [selectCurrentUser],
  (user) => !!user
);