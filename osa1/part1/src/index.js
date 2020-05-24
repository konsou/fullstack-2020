import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => ( <div>Counter: {counter}</div> )
const Button = ({ text, handleClick }) => ( <button onClick={handleClick}>{text}</button> )
  

const App = props => {
  console.log("Apissa ollaan")

  const [ counter, setCounter ] = useState(0)

  const increaseCounter = () => setCounter(counter + 1)
  const decreaseCounter = () => setCounter(counter - 1)
  const resetCounter = () => setCounter(0)

  return (
  <div>
    <Display counter={counter} />
    <Button text="+1" handleClick={increaseCounter} />
    <Button text="-1" handleClick={decreaseCounter} />
    <Button text="Reset" handleClick={resetCounter} />
  </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById("root")
)
