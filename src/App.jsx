import { useState } from 'react'

import './App.css'

  export default function Game(){
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares){
      setHistory([...history, nextSquares]);
      setXIsNext(!xIsNext);
    }
    return (
    <div className="game">
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          <div className="game-info">
            <ol>{/*TODO*/}</ol>
          </div>
        </div>
    )
  }
  //Child Component
  //destructure the num prop with {num}.
  //you can also access it as props.num if you write function Square(props)
  function Square({value, onSquareClick}){
    return <button 
            className="square"
            onClick={onSquareClick}
            >{value}</button>
  }
//Parent Component
function Board({ xIsNext, squares, onPlay }) {
  //each time player moves, xIsNext will be flipped to determin which player foes next and the game's state will be saved.
  // const [xIsNext, setXIsNext] = useState(true)
  // //9 null - 9 components
  // const [squares, setSquares] = useState(Array(9).fill(null))

  //lets React know the state of the component has changed.
  //triggers a re-render of the components that use the squares state (Board), as will as it child components (the square components.)
  function handleClick(i) {
    //copying the squares array.
    const nextSquares = squares.slice();
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    if(xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else {
    status = "Next player: " +(xIsNext? "X": "0")
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* 
          props are similar to variables in the sense that they allow you to pass data from parent component to child component. 
        */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )


  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 3],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i=0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      //squares[a] , squares[a] === squares[b], squres[a] === squares[c]
      //Checks winning combinations has the same value(e.g, 'X', 'X', 'X') or ('O', 'O', 'O')
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null;
  }
}

