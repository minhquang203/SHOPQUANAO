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
    key: 'auth', // Thay 'root' bằng 'auth'
    storage,
    whitelist: ['auth'],
    version: 1,
    serialize: true, // Thêm tuỳ chọn này
    deserialize: true,
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
