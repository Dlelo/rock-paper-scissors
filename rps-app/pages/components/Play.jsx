import React from 'react'
import styles from '../../styles/Play.module.css'
import Link from "next/link";
import Game from '../game'

const Play = ({setMyChoice}) => {
    const setChoice = (e) => {
        setMyChoice(e.target.dataset.id);

      };


  return (
    <div className={styles.container}>
        <div className={styles.main}>

        <Link href="/game" passHref>
             <div
             data-id='rock'
             onClick={setChoice}
             className={styles.rock}>
                 Rock
             </div>
         </Link>
         <Link href="/game" passHref>
             <div
             data-id='paper'
             onClick={setChoice}
             className={styles.paper}>
                 Paper
             </div>
         </Link>
         <Link href="/game" passHref>
             <div
             data-id='scissor'
             onClick={setChoice}
             className={styles.scissor}>
                 Scissors
             </div>
         </Link>
         <Link href="/game" passHref>
             <div
             data-id='lizard'
             onClick={setChoice}
             className={styles.lizard}>
             Lizard
             </div>
         </Link>
         <Link href="/game" passHref>
             <div
             data-id='spock'
             onClick={setChoice}
             className={styles.spock}>
             Spock
             </div>
         </Link>

        </div> 
    </div>
  )
}

export default Play