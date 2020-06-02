import React from 'react'
import CountryTerse from './CountryTerse'
import CountryVerbose from './CountryVerbose'

const CountryView = ({ countries, filter }) => {
    if (countries.length === 0) { return <div>Loading countries...</div> }

    const filteredCountries =
        filter
        ? countries.filter(country => country.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        : countries

    if (filteredCountries.length > 10){ return <div>Too many results ({filteredCountries.length}) - please be more specific</div> }
    else if (filteredCountries.length === 1) { return <CountryVerbose country={filteredCountries[0]} /> }

    return (filteredCountries.map(country => <CountryTerse key={country.numericCode} country={country} />))
}

export default CountryView