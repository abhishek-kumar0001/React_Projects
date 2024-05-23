import React, { useState } from "react";
import "./grid.css"
import Card from "../Card/Card";
import isWinner from "../../Helpers/checkWinner";

function Grid({numberOfCards}) {
    const [board,setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn] = useState(true); //ture =>o, false =>x
    const [winner,setWinner] = useState(null);

    // play
    function play(index){
      if(turn === true){
        board[index] = "O";
      }
      else{
        board[index] = "X";
      }
      const win = isWinner(board, turn ? "O" : "X")
      if(win){
        setWinner(win);
      }
      setBoard([...board]);
      setTurn(!turn);
    }

    //play again
    function playAgain (){
      alert(`Winner's turn, ${winner} will start the game.`)
      winner === "O" ? setTurn(true) : setTurn(false);
      setWinner(null);
      setBoard(Array(numberOfCards).fill(""));
    }
    //reset
    function reset (){
      setTurn(true);
      setWinner(null);
      setBoard(Array(numberOfCards).fill(""));
    }

  return (
    <div className="gridWrapper">
      <h1 className="heading">Tic Tac Toe Game</h1>
      <h1 className="turnHighlight">Current Turn: {(turn) ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((elm,i) => <Card key={i} gameEnd={winner ? true : false} onPlay={play} player={elm} index={i} />)}
      </div>
      {
        winner && (
          <>
            <h1 className="turnHighlight">{(winner === "drow") ? "Match drow" : `${winner} has won the match`} </h1>

            {
              (winner === "drow") ? <button className="reset" onClick={reset}>Reset Game</button> : <button className="reset" onClick={playAgain}>Play Again</button>
            }
            
            
          </>
        )
      }
    </div>
  )
}

export default Grid;
