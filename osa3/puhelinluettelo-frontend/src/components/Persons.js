import React from 'react'
import Person from './Person'

const Persons = ({ persons, handleDeletePerson }) => (

    <table>
        <tbody>
            { persons.map(person => <Person key={person.name} person={person} handleDeletePerson={handleDeletePerson} />) }
        </tbody>
    </table>
)
    

export default Persons