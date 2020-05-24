import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const StatisticRow = ({ label, value, unit }) => ( 
  <tr>
    <td>{label}</td>
    <td>{value} {unit}</td>
  </tr> 
)

const Button = ({ text, handleClick }) => ( <button onClick={handleClick}>{text}</button> )

const Statistics = ({ good, neutral, bad }) => {
  const feedbackCount = () => good + neutral + bad
  const feedbackAverage = () => (good + bad * -1) / (feedbackCount())
  const percentGoodFeedback = () => good / feedbackCount() * 100

  if (feedbackCount()){
    return (
      <div>
        <h1>Stats</h1>
        <table>
          <tbody>
            <StatisticRow label="Good feedback" value={good} />
            <StatisticRow label="Neutral feedback" value={neutral} />
            <StatisticRow label="Bad feedback" value={bad} />
            <StatisticRow label="Total number of feedback" value={feedbackCount()} />
            <StatisticRow label="Feedback average" value={feedbackAverage()} />
            <StatisticRow label="Positive feedback" value={percentGoodFeedback()} unit="%" />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Stats</h1>
        <div>No feedback yet...</div>
      </div>
    )
  }
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
