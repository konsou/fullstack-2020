import React from 'react'

const Filter = ({ handleFilterChange, filter }) => <input onChange={handleFilterChange} value={filter} />

export default Filter