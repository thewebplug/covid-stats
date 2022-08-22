import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './reducer';
const store = configureStore({
    reducer: {
        covid: covidReducer
    }
})

export default store;