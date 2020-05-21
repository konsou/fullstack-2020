import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Part = (props) => (
  <p>
    {props.text} {props.number}
  </p>
)

const Content = (props) => (
  <>
    <Part text={props.text1} number={props.number1} />
    <Part text={props.text2} number={props.number2} />
    <Part text={props.text3} number={props.number3} />
  </>
)

const Total = (props) => (
  <p>Number of {props.nounPlural}: {props.number}</p>
)

const App = () => {
  const nounPlural = "exercises"

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header text={course} />
      <Content 
        text1={part1.name}
        number1={part1.exercises}
        text2={part2.name}
        number2={part2.exercises}
        text3={part3.name}
        number3={part3.exercises}
      />
      <Total 
        nounPlural={nounPlural}
        number={part1.exercises + part2.exercises + part3.exercises}
      />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))