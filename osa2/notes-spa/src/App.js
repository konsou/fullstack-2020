import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = (props) => {
    const [ notes, setNotes ] = useState([])
    const [ newNote, setNewNote ] = useState('new note text')
    const [ showAll, setShowAll ] = useState(true)

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
        id: notes.length + 1,
      }

      setNotes(notes.concat(noteObject))
      setNewNote('')
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
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'} notes
          </button>
        </div>
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note} />
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