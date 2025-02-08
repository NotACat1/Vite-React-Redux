import { Middleware } from '@reduxjs/toolkit';

const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  console.log('🚀 Dispatching:', action);
  const result = next(action);
  console.log('📊 New State:', storeAPI.getState());
  return result;
};

export default loggerMiddleware;
