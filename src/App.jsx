import { useState } from 'react'

import './App.css'

//Parent Component
function Board() {

  //Child Component
  //destructure the num prop with {num}.
  //you can also access it as props.num if you write function Square(props)
  function Square(){
    //state/value is independet of the others.
    const [value, setValue] = useState(null)
    function handleClick(){
      setValue('x')
    }
    return <button 
            className="square"
            onClick={handleClick}
            >{value}</button>
  }
  return (
    <>
      <div className="board-row">
        {/* 
          props are similar to variables in the sense that they allow you to pass data from parent component to child component. 
        */}
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}

export default Board
