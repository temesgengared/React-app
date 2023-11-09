// what do to ?creat to do list app and function name to do app 
 //import React from "react";
 import React, { useState } from 'react';

 function TodoApp() {
   // State to store the list of tasks
   const [tasks, setTasks] = useState([]);
   
   // State to store the current task input
   const [taskInput, setTaskInput] = useState('');
 
   // Function to add a new task
   const addTask = () => {
     if (taskInput.trim() !== '') {
       setTasks([...tasks, { text: taskInput, completed: false }]);
       setTaskInput('');
     }
   };
 
   // Function to delete a task
   const deleteTask = (index) => {
     const newTasks = [...tasks];
     newTasks.splice(index, 1);
     setTasks(newTasks);
   };
 
   // Function to mark a task as completed
   const toggleCompleted = (index) => {
     const newTasks = [...tasks];
     newTasks[index].completed = !newTasks[index].completed;
     setTasks(newTasks);
   };
 
   return (
     <div>
       <h1>Simple To-Do List</h1>
       <div>
         <input
           type="text"
           placeholder="Add a task"
           value={taskInput}
           onChange={(e) => setTaskInput(e.target.value)}
         />
         <button onClick={addTask}>Add Task</button>
       </div>
       <ul>
         {tasks.map((task, index) => (
           <li key={index}>
             <span
               style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
             >
               {task.text}
             </span>
             <button onClick={() => toggleCompleted(index)}>
               {task.completed ? 'Undo' : 'Complete'}
             </button>
             <button onClick={() => deleteTask(index)}>Delete</button>
           </li>
         ))}
       </ul>
     </div>
   );
 }
 
 export default TodoApp;
 
