import React from 'react'
import styles from '../../styles/Play.module.css'
import Link from "next/link";

const Play = ({setMyChoice}) => {
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);

      };


  return (
    <div className={styles.container}>
        <div className={styles.main}>


                <div
                data-id='rock'
                onClick={setChoice}
                className={styles.rock}>
                    Rock
                </div>


             <div
             data-id='paper'
             onClick={setChoice}
             className={styles.paper}>
                 Paper
             </div>


             <div
             data-id='scissors'
             onClick={setChoice}
             className={styles.scissor}>
                 Scissors
             </div>


             <div
             data-id='lizard'
             onClick={setChoice}
             className={styles.lizard}>
             Lizard
             </div>


             <div
             data-id='spock'
             onClick={setChoice}
             className={styles.spock}>
             Spock
             </div>


        </div> 
    </div>
  )
}

export default Play