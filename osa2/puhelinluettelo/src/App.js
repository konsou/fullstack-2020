import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ errorMessage, setErrorMessage] = useState('')

    const handleNewName = (event) => {
        event.preventDefault()
        //console.log(newName)
        const newPerson = { name: newName }
        console.log('new person: ', newPerson)
        // Check for duplicate entries
        if (persons.some(person => person.name === newPerson.name)) { 
            console.log('person exists')
            alert(`${newName} already exists!`)
            //setErrorMessage('{person.name} already exists!') 
            }
        else {
            console.log('person doesn\'t exist, adding')
            setPersons(persons.concat(newPerson))
            setNewName('')
        }
    }

    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
        <h2>Phonebook</h2>
        <form>
            <div id="error">{errorMessage}</div>
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