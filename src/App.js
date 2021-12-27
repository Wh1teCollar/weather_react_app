import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserCity,
    getUserLocation,
    addUserCity,
    addCity,
    fetchUserCity,
} from './store/citySlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const result = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                dispatch(getUserLocation(result));
                // const latitude = position.coords.latitude;
                // const longitude = position.coords.longitude;

                dispatch(fetchUserCity(result));
                // dispatch(getUserCity());
                // dispatch(addUserCity());
                // dispatch(addCity('Kiev'));
            },
            function (error) {
                console.error(
                    'Error Code = ' + error.code + ' - ' + error.message
                );
            }
        );
    }, [dispatch]);
    const city = useSelector((state) => state.city.userCity);
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                {city}
            </header>
        </div>
    );
}

export default App;
