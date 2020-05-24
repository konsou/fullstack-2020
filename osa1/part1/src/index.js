import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ title, counter }) => ( <div>{title}: {counter}</div> )

const History = ({ allClicks }) => {
  if (allClicks.length === 0){ 
    return (
      <div>
        Use the app by clicking the buttons
      </div>
    )
  } else { 
    return (
      <div>
        Button click history: { allClicks.join(" ") }
      </div>
    )
  }

}
const Button = ({ text, handleClick }) => ( <button onClick={handleClick}>{text}</button> )


{/* NYT OSA 1d */}

const App = props => {
  console.log("Apissa ollaan")

  const [ leftClicks, setLeftClicks ] = useState(0)
  const [ rightClicks, setRightClicks ] = useState(0)
  const [ allClicks, setAllClicks ] = useState([])

  const handleClick = (counter, setCounter, stringIdentifier, historyArray, setHistoryArray) => {
    return () => {
      setCounter(counter + 1)
      setHistoryArray(historyArray.concat(stringIdentifier))
    }
  }

  return (
  <div>
    <Display title="Left" counter={leftClicks} />
    <Display title="Right" counter={rightClicks} />
    <History allClicks={allClicks} />
    <Button text="Left" handleClick={handleClick(leftClicks, setLeftClicks, "L", allClicks, setAllClicks)} />
    <Button text="Right" handleClick={handleClick(rightClicks, setRightClicks, "R", allClicks, setAllClicks)} />
  </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById("root")
)
