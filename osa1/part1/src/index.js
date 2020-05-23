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

  return (
  <div>
    <button onClick={() => setCounter(counter + 1)}>Button click count: {counter}</button>
  </div>
  )
}

const TimedCounter = ({ timeOut }) => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    timeOut
  )

  return (
    <div>Timed counter: {counter}</div>
  )
}


const App = (props) => {
  console.log("Apissa ollaan")


  const now = new Date()
  const a = 10
  const b = 20
  const name = "Erkki"
  const age = 123

  return (
  <div>
    <TimedCounter timeOut="1000" />
    <TimedCounter timeOut="500" />
    <IncrementButton />
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


ReactDOM.render(
  <App />, 
  document.getElementById("root")
)
