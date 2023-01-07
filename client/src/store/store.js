import { configureStore } from '@reduxjs/toolkit';
import authslice from './authslice';
import postslice from './postslice';

const store = configureStore({
    reducer: {
        posts: postslice,
        auth: authslice,
    },
});

export default store;