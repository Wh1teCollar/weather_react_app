import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const WeatherApiKey = '087ad42d4a4b5e7d13b15de1267bab88';

export const OpenWeatherMapAPI = createApi({
	reducerPath: 'OpenWeatherMapAPI',
	baseQuery: fetchBaseQuery({
		baseUrl:'http://api.openweathermap.org/data/2.5/weather'}),
		endpoints: (build) => ({
			getWeather: build.query({
				query: (Latitude, Longitude)=> `?lat=${Latitude}&lon=${Longitude}&appid=${WeatherApiKey}&mode=json&units=metric`
		})
	})
})

export const { useGetWeatherQuery } = OpenWeatherMapAPI;