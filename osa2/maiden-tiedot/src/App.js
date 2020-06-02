import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryView from './components/CountryView'
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
      <CountryView 
        countries={countries} 
        filter={filter} 
        />
    </div>
  );
}

export default App;
