import React from 'react'

const Person = ({ person, handleDeletePerson }) => {
    //console.log(person)
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.number}</td>
            <td><button onClick={() => handleDeletePerson(person.id)}>Delete</button></td>
        </tr>
    )
}

export default Person