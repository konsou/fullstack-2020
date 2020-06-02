import React from 'react'

const CountryTerse = ({ country, setFilter }) => (
    <li>{country.name} <button onClick={() => setFilter(country.name)}>show</button></li>
)

export default CountryTerse