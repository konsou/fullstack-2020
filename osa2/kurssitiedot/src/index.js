import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Part = (props) => {
  console.log(`in Part - part: ${JSON.stringify(props.part)}`)
  return (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
  )
}

const Content = (props) => {
  console.log(`in Content - parts: ${JSON.stringify(props.parts)}`)
  props.parts.forEach(element => console.log(element))
  return (
  <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </>
  )
}

const Total = (props) => (
  <p>Number of {props.nounPlural}: {sumProperties(props.parts, "exercises")}</p>
)

const sumProperties = (array, propertyName) => {
  let sum = 0
  array.forEach(element => {
    sum += element[propertyName]
  });
  return sum
}

const App = () => {
  const nounPlural = "exercises"

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header text={course} />
      <Content parts={parts} />
      <Total 
        nounPlural={nounPlural}
        parts={parts}
      />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))