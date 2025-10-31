import React from 'react';

function WeatherApp() {
  const API_KEY = 'YOUR_KEY_HERE'; // ✅ Declare here, not inside return

  const query = "London"; // example query
  const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;

  return (
    <div>
      Lets Create Weather-App using OpenWeatherAPI
      <p>{geoApiUrl}</p> {/* ✅ You can safely use variables inside JSX like this */}
    </div>
  );
}

export default WeatherApp;
