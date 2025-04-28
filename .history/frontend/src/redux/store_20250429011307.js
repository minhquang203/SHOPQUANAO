// src/redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'], // only auth will be persisted
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create persistor
const persistor = persistStore(store);

export { persistor, store };
