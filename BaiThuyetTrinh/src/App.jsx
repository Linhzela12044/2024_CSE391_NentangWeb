import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import StopWatch from './StopWatch'
import ToDoList from './ToDoList'


function App() {

  const[ShowStopWatch, setShowStopWatch] = useState(false)
  const[ShowMain, setShowMain] = useState(false)

  function toggleStopWatch(){
    setShowStopWatch(state => !state);
  }

  function Hello(props){
    
    const hello = <p>Hello {props.name}</p>
    const noName = <p>You forgot to enter your name</p>
    
    return(
        (props.name!=null ? hello : noName)
    )

}

  return (
    <>
      <Hello name="Steve"/>
      <Hello name="Jame"/>
      <Hello name="John"/>


      <ToDoList/>
      {/* <Clock/>
      
      <div className="clock-function">
        <button className="stop-watch-button" onClick={toggleStopWatch}>{ShowStopWatch ? 'Hide StopWatch' : 'Show StopWatch'}</button>
      </div>
      {ShowStopWatch && <StopWatch/>} */}
    </>
  )
}

export default App
