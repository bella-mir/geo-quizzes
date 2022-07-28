import React from "react";
import styles from "./splash.module.scss"



export default function Splash() {
  return (
    <div className={styles.splash}>
      <div className={styles.rightColumn}>
      <h1 className={styles.title}>GEO-Quizzes</h1>
      <p className={styles.subtitle}>
        Let's play and learn
      </p>
      </div>
      <div className={styles.leftColumn}>
      
      </div>

    </div>
  );
}
