import React, { useState, useEffect } from 'react'
import Notification from './components/Notification'
import Filter from './components/Filter'
import Persons from './components/Persons'
import AddPersonForm from './components/AddPersonForm'
import personService from './services/persons'

const notificationShowTime = 5000

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
    const [ filter, setFilter] = useState('')
    const [ notification, setNotification ] = useState({message: null, isError: false})

    const displayNotification = (message, isError=false) => {
        setNotification({message, isError})
        if (!isError) {
            setTimeout(() => { setNotification({message: null, isError: false})}, notificationShowTime)
        }
    }

    useEffect(() => {
        personService
            .getAll()
            .then(persons => {
                console.log('axios response:')
                console.log(persons)
                setPersons(persons)
                displayNotification(`${persons.length} persons fetched`)

            })
            .catch(error => {
                displayNotification(`Error fetching persons. Maybe your internet connection is down? (${error.response.data.error})`, true)
            })
    }, []) // run only once


    const handleNewPerson = (event) => {
        event.preventDefault()
        //console.log(newName)
        const newPerson = { 
            name: newName,
            number: newPhoneNumber
        }
        console.log('new person: ', newPerson)
        // Check for duplicate entries
        const duplicatePerson = persons.find(person => person.name === newName)

        if (duplicatePerson) { 
            console.log('person exists')
            if (window.confirm(`${newName} already exists\n` +
                               `Current phone number: ${duplicatePerson.number}\n` + 
                               `Replace phone number with ${newPhoneNumber}?`
            )){
                personService
                    .update(duplicatePerson.id, newPerson)
                    .then(updatedPerson => {
                        console.log('updatedPerson', updatedPerson)
                        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
                        setNewName('')
                        setNewPhoneNumber('')
                        displayNotification(`Updated telephone number for ${newName}`, false)
                    })
                    .catch(error => {
                        console.log(error.response.data)
                        displayNotification(`Error updating person: ${error.response.data.error}`, true)
                    })
            }
            }
        else {
            console.log('person doesn\'t exist, adding')
            personService
                .create(newPerson)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson))
                    setNewName('')
                    setNewPhoneNumber('')
                    displayNotification(`Added ${createdPerson.name}`, false)
                })
                .catch(error => {
                    console.log(error.response.data)
                    displayNotification(`Error creating person: ${error.response.data.error}`, true)
                })
            
            
        }
    }

    const handleDeletePerson = (id) => {
        console.log(`Deleting person ${id}`)
        const personToDelete = persons.find(person => person.id === id)

        if (window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)){
            personService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                    displayNotification(`${personToDelete.name} deleted`)
                })
                .catch(error => {
                    displayNotification(`Error deleting person: ${error.response.data.error}`, true)
                })
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
            <Notification message={notification.message} isError={notification.isError} />
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
            <Persons 
                persons={filteredPersons} 
                handleDeletePerson={handleDeletePerson}
                />
        </div>
    )
}

export default App