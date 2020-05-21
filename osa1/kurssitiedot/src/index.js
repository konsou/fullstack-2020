import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Content = (props) => (
  <>
    <p>
      {props.text1} {props.number1}
    </p>
    <p>
      {props.text2} {props.number2}
    </p>
    <p>
      {props.text3} {props.number3}
    </p>
  </>
)

const Total = (props) => (
  <p>Number of {props.nounPlural}: {props.number}</p>
)

const App = () => {
  const nounPlural = "exercises"
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header text={course} />
      <Content 
        text1={part1}
        number1={exercises1}
        text2={part2}
        number2={exercises2}
        text3={part3}
        number3={exercises3}
      />
      <Total 
        nounPlural={nounPlural}
        number={exercises1 + exercises2 + exercises3}
      />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))