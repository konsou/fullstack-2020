import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomIndex = array => Math.floor(Math.random()*(array.length - 1))
const randomItem = array => array[randomIndex(array)]

const Display = ({ text }) => <div>{text}</div>
const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = ({ anecdotes }) => {
  const [selectedIndex, setSelectedIndex] = useState(randomIndex(anecdotes))

  const selectRandomAnecdote = () => setSelectedIndex(randomIndex(anecdotes))

  return (
    <div>
      <Display text={anecdotes[selectedIndex]} />
      <Button text="Random anecdote" handleClick={() => selectRandomAnecdote()} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)