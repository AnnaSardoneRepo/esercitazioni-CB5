import React from 'react'
import {useState} from 'react';
import ToDoItem from './ToDoItem'
import InputItem from './InputItem';

export default function ToDoList() {
    const [tasks, setTasks] = useState(
        [{label: 'Fare la spesa', isDone:false},
         ]
        
    )
const submitTasks = (event) =>{
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const label = formData.get('taskName');
     setTasks((oldTasks) => {
        const newTask = {
            label: label, isDone:false 
        }
        return [...oldTasks, newTask];
     })
}


   const changeStatus = (index, currentStatus) =>{
       console.log(tasks[index])
       setTasks((oldTasks) => {
        const newTasks = oldTasks.concat([]);
            newTasks[index].isDone = !currentStatus;
            return newTasks;
       })
   }

  return (
    <div className='container'>
    <form onSubmit={submitTasks}>
        <InputItem
        name = 'taskName'
        />
    </form>
    <ul>
        {tasks.map((task, index) => (
    
    <ToDoItem 
    key = {index}
    index = {index}
    isDone = {task.isDone}
    changeStatus = {changeStatus}
    >{task.label}
    </ToDoItem>
    ))}

    </ul>
    </div>
  )
}
