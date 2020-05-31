import React from 'react'

const AddPersonForm = ({ handleNameChange, newName, handlePhoneNumberChange, newPhoneNumber, handleNewPerson }) => (
    <form>
        <div>
            name: <input onChange={handleNameChange} value={newName} /><br />
            phone number: <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
        </div>
        <div>
            <button onClick={handleNewPerson} type="submit">add</button>
        </div>
    </form>
)

export default AddPersonForm