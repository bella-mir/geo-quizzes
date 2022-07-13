import React from "react";
import { Link } from "react-router-dom";
import styles from "./splash.module.scss"

export default function Splash() {
  return (
    <div className={styles.splash}>
      <h1 className={styles.title}>Hello, Russia</h1>
      <p className={styles.subtitle}>
        Geography Quizzes to learn more about Russia
      </p>
    </div>
  );
}
