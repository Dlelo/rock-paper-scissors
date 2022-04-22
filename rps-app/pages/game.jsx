import React from 'react'
import Link from "next/link";
import {useState, useEffect} from "react"

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(0);


  console.log("my choice at game", myChoice)
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spoke"];
    setHouse(choices[Math.floor(Math.random() * 5)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);
  const Result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "spock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    }else if (myChoice === "spock" && house === "rock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "paper" && house === "rock") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "rock" && house === "lizard") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "lizard" && house === "rock") {
        setPlayerWin("lose");
        setScore(score - 1);
      }else if (myChoice === "lizard" && house === "paper") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "paper" && house === "lizard") {
        setPlayerWin("lose");
        setScore(score - 1);
      }else if (myChoice === "scissors" && house === "lizard") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "lizard" && house === "scissors") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "lizard" && house === "spock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "spock" && house === "lizard") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "paper" && house === "spock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "spock" && house === "paper") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "spock" && house === "scissors") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "scissors" && house === "spock") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === house){
        setPlayerWin("draw")
      } else {
      setPlayerWin("error");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter]);


  return (
    <div className="game">
      my choice:{myC} <br />
      House choice:{house} <br />
    
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      {playerWin == "error" && <h2>Something Wrong has Happened</h2>}
    
      <Link href="/" passHref onClick={() => setHouse()}>
        Play Again
      </Link>
    </div>
  )
}

export default Game