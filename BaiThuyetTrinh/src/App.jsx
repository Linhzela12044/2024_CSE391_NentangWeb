import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import StopWatch from './StopWatch'

function App() {

  const[ShowStopWatch, setShowStopWatch] = useState(false)
  const[ShowMain, setShowMain] = useState(false)

  function toggleStopWatch(){
    setShowStopWatch(state => !state);
  }



  return (
    <>
      
      <Clock/>
      
      <div className="clock-function">
        <button className="stop-watch-button" onClick={toggleStopWatch}>{ShowStopWatch ? 'Hide StopWatch' : 'Show StopWatch'}</button>
      </div>
      {ShowStopWatch && <StopWatch/>}
    </>
  )
}

export default App
