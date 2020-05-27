import React from 'react'
import ReactDOM from 'react-dom'


const Course = ({ course }) => {
  console.log("Course - course: ", course)
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />    
    </div>
  )
}


const Header = ({ text }) => (
  <h1>{text}</h1>
)


const Content = ({ parts }) => {
  console.log('in Content - parts: ', parts)
  return (
    <ul>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </ul>
  )
}


const Part = ({ part }) => {
  console.log('in Part - part: ', part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}


const Total = ({ parts }) => (
  <p>Number of exercises: {sumProperties(parts, "exercises")}</p>
)


const sumProperties = (object, propertyName) => {
  return object.reduce(
    (accumulator, object) => accumulator += object[propertyName], 
    0 // counter starting value
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      { courses.map(course => <Course key={course.id} course={course} />) }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))