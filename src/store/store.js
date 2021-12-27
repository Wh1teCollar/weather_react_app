import { configureStore } from '@reduxjs/toolkit';
import cityRuducer from './citySlice';
import { OpenWeatherMapAPI } from './OpenWeatherMapAPI';

export const store = configureStore({
    reducer: {
        city: cityRuducer,
        // [OpenWeatherMapAPI.reducerPath]: OpenWeatherMapAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(OpenWeatherMapAPI.middleware),
});
