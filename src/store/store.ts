import { configureStore } from '@reduxjs/toolkit';
import cryptoSliceReducer from './reducers/cryptoSlice';

const store = configureStore({
  reducer: {
    root: cryptoSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
