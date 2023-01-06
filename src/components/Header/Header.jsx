/* eslint-disable */
import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const current = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const date = `${current.getFullYear()}년 ${
    current.getMonth() + 1
  }월 ${current.getDate()}일 ${week[current.getDay()]}요일`;

  return (
    <section className={styles.section}>
      <div className={styles.top}>{date}</div>
      <div className={styles.bottom}>
        <button onClick={toggleDarkMode} className={styles.toggle}>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        <ul className={styles.filters}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => onFilterChange(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
