import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import authReducer from './authSlice';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Chỉ lưu auth state
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt cảnh báo cho redux-persist
    }),
});

export const persistor = persistStore(store);