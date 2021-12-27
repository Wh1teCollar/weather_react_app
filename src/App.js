import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLocation, addCity, fetchUserCity } from './store/citySlice';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const result = {
                    latitude: parseFloat(position.coords.latitude).toFixed(2),
                    longitude: parseFloat(position.coords.longitude).toFixed(2),
                };
                dispatch(getUserLocation(result));
                dispatch(fetchUserCity(result));
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
                Your city - {city}
            </header>
        </div>
    );
}

export default App;
