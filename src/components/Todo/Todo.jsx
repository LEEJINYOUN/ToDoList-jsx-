/* eslint-disable */
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "완료" : "진행중";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status == "완료"}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={status != "완료" ? styles.text : styles.textCheck}
      >
        {text}
      </label>
      <button onClick={handleDelete} className={styles.button}>
        <BsFillTrashFill className={styles.trash} />
      </button>
    </li>
  );
}
