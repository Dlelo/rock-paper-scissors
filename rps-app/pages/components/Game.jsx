import React from 'react'
import Link from "next/link";
import {useState, useEffect} from "react"

const Game = ({ score, myChoice, setScore, setMyChoice}) => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newComputerPick = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    setComputer(choices[Math.floor(Math.random() * 5)]);
  };
  useEffect(() => {
    newComputerPick();
  }, []);


  const Result = () => {
    if (myChoice === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && computer === "spock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    }else if (myChoice === "spock" && computer === "rock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "paper" && computer === "rock") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "rock" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "rock" && computer === "lizard") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "lizard" && computer === "rock") {
        setPlayerWin("lose");
        setScore(score - 1);
      }else if (myChoice === "lizard" && computer === "paper") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "paper" && computer === "lizard") {
        setPlayerWin("lose");
        setScore(score - 1);
      }else if (myChoice === "scissors" && computer === "lizard") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "lizard" && computer === "scissors") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "lizard" && computer === "spock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "spock" && computer === "lizard") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "paper" && computer === "spock") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "spock" && computer === "paper") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === "spock" && computer === "scissors") {
        setPlayerWin("win");
        setScore(score + 1);
      } else if (myChoice === "scissors" && computer === "spock") {
        setPlayerWin("lose");
        setScore(score - 1);
      } else if (myChoice === computer){
        setPlayerWin("draw")
      } else {
      setPlayerWin("error");
    }
  };

  useEffect(() => {
    Result();
   }, [computer]);

  return (
    <div className="game">
      <div>My choice:{myChoice}</div>
      <br/>
     <div>Computer's Choice:{computer}</div> <br />
    

      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      {playerWin == "error" && <h2>Ooops!! Try Again</h2>}
    
      <button onClick={()=> { setComputer(); setMyChoice("");}}>
        Play Again
      </button>
    </div>
  )
}
export default Game