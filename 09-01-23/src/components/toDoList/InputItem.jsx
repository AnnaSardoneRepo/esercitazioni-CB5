import React from "react";

export default function InputItem(props) {
  const { label = "", ...attributi } = props;
  return (
    <label>
      <span>{label}</span>
      <input className="todo-input" type="text" placeholder="inserisci task"{...attributi}></input>
    </label>
  );
}
