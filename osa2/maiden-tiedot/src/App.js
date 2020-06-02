import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList'
import Filter from './components/Filter'


const App = props => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
  }, []) // run once

  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div className="App">
      <Filter 
        handleFilterChange={handleFilterChange} 
        filter={filter} 
        />
      <CountriesList 
        countries={countries} 
        filter={filter} />
    </div>
  );
}

export default App;
