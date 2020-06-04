import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = (props) => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState('new note text')
    const [ showAll, setShowAll ] = useState(true)

    // This effect runs once, after the first render
    useEffect(() => {
      console.log('in effect')
      axios
        .get('http://localhost:3001/notes')
        .then(response => {
          console.log('notes fetched')
          setNotes(response.data)
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

      axios
        .post('http://localhost:3001/notes', noteObject)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
    }

    const handleNoteChange = (event) => {
      // console.log(event.target.value)
      setNewNote(event.target.value)
    }

    const toggleImportanceOf = (id) => {
      console.log('importance of ' + id + ' needs to be changed')
      const url = `http://localhost:3001/notes/${id}`
      const note = notes.find(note => note.id === id)
      const changedNote = { ...note, important: !note.important }
      console.log('note after change: ', changedNote)

      axios
        .put(url, changedNote)
        .then(response =>{
          setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
    }

    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important)
  
    return (
      <div>
        <h1>Notes</h1>
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