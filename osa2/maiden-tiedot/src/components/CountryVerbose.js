import React from 'react'
import CityWeather from './CityWeather'

const CountryVerbose = ({ country }) => (
    <div className="countryData">
        <h2>{country.name}</h2>
        <p>Capital {country.capital}</p>
        <p>Population {country.population}</p>
        <h3>Languages</h3>
        <ul>
            { country.languages.map(language => <li key={language.name}>{language.name}</li>) }
        </ul>
        <img src={country.flag} width="20%" alt={`Flag for ${country.name}`} />
        <CityWeather city={country.capital} countryCodeAlpha2={country.alpha2Code} />
    </div>
)

export default CountryVerbose