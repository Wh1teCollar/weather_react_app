import React from 'react';
//import { useSelector } from 'react-redux';
import { useGetWeatherQuery } from '../../store';
// import { useState } from 'react';
const getLocation = navigator.geolocation.getCurrentPosition(
	function (position) {
		// setCoords({
		// 	lat: position.coords.latitude,
		// 	lon: position.coords.longitude
		// })
		localStorage.setItem('Latitude', position.coords.latitude)
		localStorage.setItem('Longitude', position.coords.longitude)
		console.log(localStorage.getItem('Latitude'));
		console.log(localStorage.getItem('Longitude'));
		const Latitude = localStorage.getItem('Latitude');
		const Longitude = localStorage.getItem('Longitude');
		console.log('--', Latitude);
		console.log('--', Longitude);
		const { data, isLoading } = useGetWeatherQuery(Latitude, Longitude);
		if (isLoading) return "Loading..."
		localStorage.setItem('City', data.name)
	},
	function (error) {
		console.error("Error Code = " + error.code + " - " + error.message);
	}
);

const GetLocation = () => {
	// const [coords, setCoords] = useState({
	// 	lat: 0,
	// 	lon: 0
	// });
	//const cityList = useSelector(state => state.cityList.cityList);

	return (
		<>
			<p>City: {localStorage.getItem('City')}</p>
		</>
	)
};


export default GetLocation;