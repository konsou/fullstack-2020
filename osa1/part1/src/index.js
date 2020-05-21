import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  if (props.age){
    return (
      <p>Hello {props.name}, you are {props.age} years old.</p>
    )
  } else {
    return (
      <p>Hello {props.name}. You don't seem to have an age!</p>
    )
  }
}

const App = () => {
  console.log("Apissa ollaan")

  const now = new Date()
  const a = 10
  const b = 20

  return (
  <div>
    <Hello name="World" age="several billions of" />
    <Hello name="Ruby" age="23" />
    <Hello name={now.toDateString()} />
    <p>It's {now.toString()}</p>
    <p>{a} plus {b} equals {a + b}</p>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
