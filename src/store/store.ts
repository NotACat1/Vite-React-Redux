import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
import loggerMiddleware from './middleware/loggerMiddleware';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
