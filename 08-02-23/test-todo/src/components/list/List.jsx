import { useState, useReducer } from "react";
import styles from "./index.module.scss";

const initialState = [
  {
    id: Date.now(),
    name: "Learn useContext()",
  },
  
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter(task =>{
        return task.id !== action.payload.id;
      });
    default:
      throw new Error();
  }
}

const List = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const addTask = (e) => {
      e.preventDefault();
      const task = {
      id: Date.now(),
        name
      };
setName("");
dispatch({type: "add", payload: task})
  };

  return (
    <div className={styles.List}>
      <h1>My Task List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="add your task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button className={styles.btnAdd}>Add Task</button>
        </div>
      </form>
      <div>
        <ul>
          {state.map((task) => {
            return (<li key={task.id}>{task.name}
            <div><button className={styles.btnDel} onClick={() => dispatch({type:"delete", payload:{id: task.id}})}>Delete Task</button></div>
            </li>
         ); })}
        </ul>
      </div>
    </div>
  );
};

export default List;
