import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import taskReducer from './tasksSlice';

export const store = configureStore({
    reducer: {
        task: taskReducer, 
        user: userReducer,
    },
});
