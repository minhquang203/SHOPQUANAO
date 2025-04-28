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
// src/redux/store.js
const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'],
    version: 1,
    serialize: true,
    deserialize: true,
  };
  
  const rootReducer = combineReducers({
    auth: authReducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer, (err) => {
    if (err) {
      console.error('Persist Error:', err);
      localStorage.removeItem('persist:auth');
    }
  });

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
