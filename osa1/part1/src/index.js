import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const birthYearEstimate = () => new Date().getFullYear() - age

  if (isNaN(age)){
    return (
      <p>Hello {name}. You don't seem to have an age!</p>
    )
  } else {
    return (
      <p>Hello {name}, you are {age} years old. You were probably born around {birthYearEstimate(age)}.</p>
    )
  }
}

const IncrementButton = props => {
  const [ counter, setCounter ] = useState(0)

  const incrementCounter = (current) => setCounter(current + 1)

  return (
  <div>
    <button onClick={incrementCounter(counter)}>{counter}</button>
  </div>
  )
}


const App = ({ counter }) => {
  console.log("Apissa ollaan")

  const now = new Date()
  const a = 10
  const b = 20
  const name = "Erkki"
  const age = 123

  return (
  <div>
    <div>Counter: {counter}</div>
    <Hello name="World" age="several billions of" />
    <Hello name="Ruby" age="23" />
    <Hello age="1" name="Name and Age order different" />
    <Hello name={name} age={age} />
    <Hello name={now.toDateString()} />
    <p>It's {now.toString()}</p>
    <p>{a} plus {b} equals {a + b}</p>
  </div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter}/>, document.getElementById("root"))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
