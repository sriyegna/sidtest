import { configureStore } from '@reduxjs/toolkit';
import trailsReducer from '../features/trailsSlice';

export const store = configureStore({
  reducer: {
    trails: trailsReducer,
  },
});
