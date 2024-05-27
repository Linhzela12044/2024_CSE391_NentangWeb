import React, { useState, useEffect, useRef } from "react"

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalId = useRef(null)
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalId.current = setInterval(() => {setElapsedTime(Date.now() - startTimeRef.current)}, 10)
        }
            return() => {
                clearInterval(intervalId.current)
            }
    }, [isRunning])

    function Start() {
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function Stop() {
        setIsRunning(false)
        
    }

    function Reset() {
        setElapsedTime(0)
        setIsRunning(false)
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        let miliseconds = Math.floor((elapsedTime % 1000) / 10)

        return (`${padZero(minutes)}:${padZero(seconds)}:${padZero(miliseconds)}`)
    }

    function padZero(number){
        return((number<10 ? "0" : "" ) + number)
    }

    return (
        <div className="stop-watch-container">
            <div className="display">
                {formatTime()}
            </div>
            <div className="control">
                <button className="start-button" onClick={Start}>Start</button>
                <button className="stop-button" onClick={Stop}>Stop</button>
                <button className="reset-button" onClick={Reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch