import React from 'react'


export default function ToDoItem(props) {
    const clickHandler = () => {
        
        props.changeStatus(props.index, props.isDone)
    }
    return (
    <li>
        {/* {props.index} */}
        {props.isDone ? '✅' : '❎' } <span>{props.children}</span> 
        <button onClick={clickHandler}>{ props.isDone ? 'Un-Done': 'Done'}</button>
    </li>
  )
}
