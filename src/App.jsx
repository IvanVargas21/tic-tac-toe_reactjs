import { useState } from 'react'

import './App.css'


  //Child Component
  //destructure the num prop with {num}.
  //you can also access it as props.num if you write function Square(props)
  function Square({value, onSquareClick}){
    //state/value is independet of the others.
    // const [value, setValue] = useState(null)
    // function handleClick(){
    //   setValue('X')
    // }
    return <button 
            className="square"
            onClick={onSquareClick}
            >{value}</button>
  }
//Parent Component
function Board() {
  //9 null - 9 components
  const [squares, setSquares] = useState(Array(9).fill(null))

  //lets React know the state of the component has changed.
  //triggers a re-render of the components that use the squares state (Board), as will as it child components (the square components.)
  function handleClick(i) {
    //copying the squares array.
    const nextSquares = squares.slice();
    //updates the nextSquares array to add X to the first([0] index) square.
    nextSquares[i] = "X";
    setSquares(nextSquares)
  }



  return (
    <>
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
}

export default Board
