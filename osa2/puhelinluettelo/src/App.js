import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]) 
    const [ newName, setNewName ] = useState('')
    const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
    const [ filter, setFilter] = useState('')

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
            }
        else {
            console.log('person doesn\'t exist, adding')
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewPhoneNumber('')
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneNumberChange = (event) => {
        setNewPhoneNumber(event.target.value)
    }

    const handleFilterChange = (event) => setFilter(event.target.value)

    const sortedPersons = persons.sort((a, b) => a.name.localeCompare(b.name))

    const filteredPersons = 
        filter 
        ? sortedPersons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        : sortedPersons

    return (
        <div>
            <h1>Phonebook</h1>
            <h2>Filter</h2>
            <Filter 
                handleFilterChange={handleFilterChange} 
                filter={filter} 
                />
            <h2>Add a new person</h2>
            <AddPersonForm 
                handleNameChange={handleNameChange}
                newName={newName}
                handlePhoneNumberChange={handlePhoneNumberChange}
                newPhoneNumber={newPhoneNumber}
                handleNewPerson={handleNewPerson}
                />
            <h2>Numbers</h2>
            <Persons persons={filteredPersons} />
        </div>
    )
}

export default App