import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header({score}) {
  return (
    <div className={styles.container}>
        <div className={styles.mainLeft}>
            <h1 className={styles.title}>ROCK</h1>
            <h1 className={styles.title}>PAPER</h1>
            <h1 className={styles.title}>SCISSORS</h1>
            <h1 className={styles.title}>LIZARD</h1>
            <h1 className={styles.title}>SPOCK</h1>

        </div>
        <div className={styles.mainRight}>
          <div className={styles.scoreContainer}>
          <h1 className={styles.score}>SCORE</h1>
           <h1 className={styles.scoreCount}>{score}</h1>
          </div>

        </div>
    </div>
  )
}
