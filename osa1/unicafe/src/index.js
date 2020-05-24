import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ label, value }) => (
  <div>{label}: {value}</div>
)

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [ feedbackGood, setFeedbackGood ] = useState(0)
  const [ feedbackNeutral, setFeedbackNeutral ] = useState(0)
  const [ feedbackBad, setFeedbackBad ] = useState(0)

  const addFeedback = (counter, setCounter) => setCounter(counter + 1)
  const feedbackAverage = () => (feedbackGood + feedbackBad * -1) / (feedbackGood + feedbackNeutral + feedbackBad)

  return (
    <div>
      <div>
        <h1>Feedback</h1>
        <Button text="Great!" handleClick={() => addFeedback(feedbackGood, setFeedbackGood)} />
        <Button text="meh" handleClick={() => addFeedback(feedbackNeutral, setFeedbackNeutral)} />
        <Button text="Hated it :(" handleClick={() => addFeedback(feedbackBad, setFeedbackBad)} />
      </div>
      <div>
        <Display label="Good feedback" value={feedbackGood} />
        <Display label="Neutral feedback" value={feedbackNeutral} />
        <Display label="Bad feedback" value={feedbackBad} />
        <Display label="Feedback average" value={feedbackAverage()} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
