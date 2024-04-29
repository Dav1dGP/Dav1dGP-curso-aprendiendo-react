import { useState } from "react"
// npm install canvas-cofetti -E
import confetti from "canvas-confetti" 

import { Square } from "./components/square.jsx"

import {TURNS} from "./constants.js"

import {checkWinner, checkEndGame} from "./logic/board.js"

import { WinnerModal } from "./components/winnerModal.jsx"


function App() {
  {/* El board crea un array de 9 elementos y los rellena con el valor null */}
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const[winner, setWinner] = useState(null) 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizar esta posición si ya tiene algo
    if (board[index] || winner) return
    // newBoard igual a board, se hace un Spread Operator
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar e turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){//  check if game is over
      setWinner(false) //empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
      {
        board.map(( square, index) => {
          return (
            
            <Square // Componente que hemos hecho para cada uno de los cuadritos
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
              </Square>
          )
        })
      }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
