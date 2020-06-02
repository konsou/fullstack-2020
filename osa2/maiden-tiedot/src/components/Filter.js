import React from 'react'

const Filter = ({ handleFilterChange, filter }) => (
    <div>
        Filter countries: <input onChange={handleFilterChange} value={filter} />
    </div>
)


export default Filter