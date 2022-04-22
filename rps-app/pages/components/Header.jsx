import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header({score}) {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1 className={styles.title}>Rock Paper Scissors Score: {score} </h1>

        </div>
    </div>
  )
}
