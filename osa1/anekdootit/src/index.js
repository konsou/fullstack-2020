import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomIndex = array => Math.floor(Math.random()*(array.length - 1))

const AnecdoteOfTheDay = ({ anecdotes, selectedIndex, selectRandomAnecdoteFunction, addVoteFunction }) => {
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Display text={anecdotes[selectedIndex]} />
      <Button text="+1" handleClick={addVoteFunction} />
      <Button text="Random anecdote" handleClick={selectRandomAnecdoteFunction} />
    </div>
  )
}

const MostUpvotedAnecdote = ({ anecdotes, votes }) => {
  const highestVoteCount = Math.max(...votes)
  console.log("Highest vote count ", highestVoteCount)

  if (highestVoteCount <= 0){
    return (
      <div>
        <h1>The most upvoted anectode</h1>
        (no votes cast yet)
      </div>
    )
  } else {
    const highestVoteIndex = votes.findIndex((value) => value === highestVoteCount)
    const mostUpvotedAnecdote = anecdotes[highestVoteIndex] 
    return (
      <div>
        <h1>The most upvoted anectode</h1>
        <Display text={mostUpvotedAnecdote} />
        <div>This anecdote has {highestVoteCount} votes</div>
      </div>
    )
  }
}

const Display = ({ text }) => <div>{text}</div>
const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = ({ anecdotes }) => {
  const [ selectedIndex, setSelectedIndex ] = useState(randomIndex(anecdotes))
  const [ votes, setVotes ] = useState(new Uint32Array(anecdotes.length))

  const selectRandomAnecdote = () => setSelectedIndex(randomIndex(anecdotes))
  const addVote = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  console.log("selectedIndex: ", selectedIndex)
  console.log("votes: ", votes)

  return (
    <div>
      <AnecdoteOfTheDay 
        anecdotes={anecdotes} 
        selectedIndex={selectedIndex} 
        selectRandomAnecdoteFunction={selectRandomAnecdote} 
        addVoteFunction={() => addVote(selectedIndex)}
      />
      <MostUpvotedAnecdote
        anecdotes={anecdotes}
        votes={votes}
      />
      
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