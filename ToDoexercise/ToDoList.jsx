// what do to ?creat to do list app and function name to do app 
 
import React,{ useState } from "react";
//import './TodoApp.css';

function ToDoAPP () {
    const [tasks,setTasks] = useState([]);//an array to hold all value
    const [inputValue, setInputValue] = useState('');
     

    function onClick() {
        // list.push(inputValue); // shopping, swimming
        setTasks([...tasks,inputValue]);
    }

    function onChange(event) {
       setInputValue(event.target.value); // input value changed
    }

    function onDelete (task) {
        const index = tasks.indexOf(task);
        console.log('am inside on Delete check index', index); 
        tasks.splice(index,1);
        setTasks([...tasks]);
    }
    return (
        <>
        <div className="wrapper">
        <input type="text" onChange={onChange}/>
        <button type="submit" onClick={onClick}>Add Tasks</button>
        <br />
        <ul className="todoList">
            {tasks.map((task,index) => {
                return (
                <>
                <li key={index} id={index}>{task}
                <input type="checkbox"/>
                <button onClick={(e)=>onDelete(task)}>Delete</button>
                </li>
                </>
                )
            })};
        </ul>
        </div>    
        </>
        
    );
}
export default ToDoAPP
