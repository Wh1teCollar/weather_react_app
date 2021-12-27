import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const WeatherApiKey = '087ad42d4a4b5e7d13b15de1267bab88';

export const fetchUserCity = createAsyncThunk(
    'citySlice/fetchUserCity',
    async function ({ latitude, longitude }) {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WeatherApiKey}&mode=json&units=metric`
        );
        const data = await response.json();
        const result = await data.name;
        return result;
    }
);

const citySlice = createSlice({
    name: 'citySlice',
    initialState: {
        cityList: [],
        userCity: '',
        userCoords: {},
        status: '',
        error: '',
    },
    reducers: {
        addCity(state, action) {
            if (!state.cityList.includes(action.payload)) {
                state.cityList.push(action.payload);
                console.log(state.cityList);
            }
        },
        addUserCity(state) {
            if (!state.cityList.includes(state.userCity)) {
                state.cityList.push(state.userCity);
                console.log(state.cityList);
            }
        },
        getUserLocation(state, action) {
            state.coords = action.payload;
        },
    },
    extraReducers: {
        [fetchUserCity.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchUserCity.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.userCity = action.payload;
        },
        [fetchUserCity.rejected]: (state, action) => {},
    },
});

export const { addCity, getUserCity, getUserLocation, addUserCity } =
    citySlice.actions;

export default citySlice.reducer;
