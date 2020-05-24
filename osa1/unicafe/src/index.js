import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ label, value, unit }) => ( <div>{label}: {value} {unit}</div> )

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const numberOfFeedbacks = () => good + neutral + bad
  const feedbackAverage = () => (good + bad * -1) / (numberOfFeedbacks())
  const percentGoodFeedback = () => good / numberOfFeedbacks() * 100

  return (
    <div>
      <Display label="Good feedback" value={good} />
      <Display label="Neutral feedback" value={neutral} />
      <Display label="Bad feedback" value={bad} />
      <Display label="Total number of feedback" value={numberOfFeedbacks()} />
      <Display label="Feedback average" value={feedbackAverage()} />
      <Display label="Positive feedback" value={percentGoodFeedback()} unit="%" />
    </div>
  )
}

const App = () => {
  const [ feedbackGood, setFeedbackGood ] = useState(0)
  const [ feedbackNeutral, setFeedbackNeutral ] = useState(0)
  const [ feedbackBad, setFeedbackBad ] = useState(0)

  const addFeedback = (counter, setCounter) => setCounter(counter + 1)

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <Button text="Great!" handleClick={() => addFeedback(feedbackGood, setFeedbackGood)} />
        <Button text="meh" handleClick={() => addFeedback(feedbackNeutral, setFeedbackNeutral)} />
        <Button text="Hated it :(" handleClick={() => addFeedback(feedbackBad, setFeedbackBad)} />
      </div>
      <Statistics good={feedbackGood} neutral={feedbackNeutral} bad={feedbackBad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
