import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../pages/components/Header'
import Play from '../pages/components/Play'
import {useState, useEffect} from "react"
import Game from '../pages/game'

export default function Home() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.google.com/specimen/Barlow+Semi+Condensed'/>
      </Head>

      <main className={styles.main}>
        <Header score={score}/>

          {

              myChoice === "" ?
              (
               <Play setMyChoice={setMyChoice}/>
               ) : (
              <Game score={score} setScore={setScore} setHouse={setHouse}/>
             )
          }

      </main>
    </div>
  )
}
