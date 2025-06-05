import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import savedFactsReducer from './slices/savedFactsSlice';
import settingsReducer from './slices/settingsSlice';
import scoreReducer from './slices/scoreSlice';
import livesReducer from './slices/livesSlice';

const rootReducer = combineReducers({
  savedFacts: savedFactsReducer,
  settings: settingsReducer,
  score: scoreReducer,
  lives: livesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
