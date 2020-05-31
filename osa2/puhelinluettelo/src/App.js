import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
      event.preventDefault()
      console.log(newName)
      setPersons(persons.concat({ name: newName }))
      setNewName('')
  }

  const handleNameChange = (event) => {
      //console.log(event.target.value)
      setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button onClick={handleNewName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <li key={person.name}><Person person={person} /></li>) }
      </ul>
    </div>
  )

}

export default App