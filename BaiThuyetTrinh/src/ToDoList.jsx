import React, {useState} from "react"

function ToDoList(){

    const[tasks, setTasks] = useState([ ])
    const[newTask, setNewTask] = useState("")
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
           setTasks([...tasks, newTask])
            setNewTask("") 
        }
        
    }

    function removeTask(index){
        const update = tasks.filter((_, i) => i !== index)
        setTasks(update)
    }
    
    return(
        <>
        <div className="to-do-list">
            <h1>Your Tasks</h1>
            <div>
                <input type="text" placeholder="Enter your task" value={newTask} onChange={handleInputChange}></input>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((tasks,index) => 
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button className="remove-button" onClick={ () => removeTask(index)}>Delete</button>
                </li>
                )}
            </ol>
        </div>
        </>
    )
}

export default ToDoList