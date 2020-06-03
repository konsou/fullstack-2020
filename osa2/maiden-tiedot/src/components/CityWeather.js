import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CityWeather = ({ city, countryCodeAlpha2 }) => {
    const [ weather, setWeather ] = useState(null)
    
    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCodeAlpha2}&appid=${apiKey}&units=metric`
        console.log(apiUrl)

        axios
            .get(apiUrl)
            .then(response =>{
                console.log('weather API response:')
                console.log(response.data)
                setWeather(response.data)
            })
    }, [city, countryCodeAlpha2])    

    if (weather) {    
        const weatherIcon = weather.weather[0].icon
        const weatherType = weather.weather[0].main
        const weatherDescription = weather.weather[0].description
        const windSpeed = weather.wind.speed
        const windDirection = weather.wind.deg

        return (
            <div>
                <h3>Weather in {city}, {countryCodeAlpha2}</h3>
                <strong>Temperature:</strong> {weather.main.temp} degrees Celsius<br />
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={`Icon for ${weatherDescription}`} /><br />
                {weatherType} - {weatherDescription}<br />
                <strong>Wind:</strong> {windSpeed} meters / second - direction {windDirection} degrees
            </div>
        )
    } else {
        return (
            <div>Loading weather for {city}...</div>
        )
    }
}

export default CityWeather