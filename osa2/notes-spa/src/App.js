import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'


const App = (props) => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState('new note text')
    const [ showAll, setShowAll ] = useState(true)
    const [ notificationMessage, setNotificationMessage ] = useState(null)


    // This effect runs once, after the first render
    useEffect(() => {
      console.log('in effect')
      noteService
        .getAll()
        .then(notes => {
          console.log('notes fetched')
          setNotes(notes)
        })
    }, [])

    console.log('render', notes.length, 'notes')

    const addNote = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
      console.log(newNote)

      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
      }

      noteService
        .create(noteObject)
        .then(newNote => {
          setNotes(notes.concat(newNote))
          setNewNote('')
        })
    }

    const toggleImportanceOf = (id) => {
      console.log('importance of ' + id + ' needs to be changed')
      const url = `http://localhost:3001/notes/${id}`
      const note = notes.find(note => note.id === id)
      const changedNote = { ...note, important: !note.important }
      console.log('note after change: ', changedNote)

      noteService
        .update(id, changedNote)
        .then(updatedNote =>{
          setNotes(notes.map(note => note.id !== id ? note : updatedNote))
        })
        .catch(error => {
          setNotificationMessage(`Couldn't toggle importance of note ${id}: ${error.message}`)
          
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
          
          setNotes(notes.filter(note => note.id !== id))
        })
    }

    const handleNoteChange = (event) => {
      // console.log(event.target.value)
      setNewNote(event.target.value)
    }

    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important)
  
    return (
      <div>
        <h1>Notes</h1>
        <Notification message={notificationMessage} />
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'} notes
          </button>
        </div>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
          )}
        </ul>
        <form onSubmit={addNote}>
          <input 
            value={newNote} 
            onChange={handleNoteChange}
            />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
  

export default App