import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [ persons, setPersons] = useState([
        { 
            name: 'Arto Hellas',
            number: '040 123 4567'
        }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
    const [ errorMessage, setErrorMessage] = useState('')

    const handleNewPerson = (event) => {
        event.preventDefault()
        //console.log(newName)
        const newPerson = { 
            name: newName,
            number: newPhoneNumber
        }
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
            setNewPhoneNumber('')
        }
    }

    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        // TODO
        setNewPhoneNumber(event.target.value)
        // console.log(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div id="error">{errorMessage}</div>
                <div>
                    name: <input onChange={handleNameChange} value={newName} /><br />
                    phone number: <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
                </div>
                <div>
                    <button onClick={handleNewPerson} type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <table>
                <tbody>
                    { persons.map(person => <Person key={person.name} person={person} />) }
                </tbody>
            </table>
            
        </div>
    )

}

export default App