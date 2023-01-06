/* eslint-disable */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length == 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: "진행중" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="할 일을 추가하세요."
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>+</button>
    </form>
  );
}
