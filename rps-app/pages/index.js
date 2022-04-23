import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../pages/components/Header'
import Play from '../pages/components/Play'
import {useState, useEffect} from "react"
import Game from '../pages/components/Game'
import Footer from '../pages/components/Footer'

export default function Home() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Rock Paper Scissiors" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header score={score}/>

      <main className={styles.main}>
          {

              myChoice === "" ?
              (
               <Play setMyChoice={setMyChoice}/>
               ) : (
              <Game score={score} setScore={setScore} myChoice={myChoice} setMyChoice={setMyChoice}/>
             )
          }
       <div id="modal-root"></div>

      </main>

      <Footer/>
    </div>
  )
}
