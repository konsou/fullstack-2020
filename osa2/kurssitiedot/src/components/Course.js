import React from 'react'


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


export default Course