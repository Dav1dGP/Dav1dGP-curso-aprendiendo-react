import { useState } from "react"

//Creamos los turnos
const TURNS = {
  X: 'x',
  O: 'o'
}


//Creamos el cuadrado del tablero. CHildren es lo que queremos mostrar dentro del tablero, 
//updateBoard es la forma de actualizar el tablero y el index para saber el cuadradito que indice es
const Square = ({ children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handleClick} className="className">
      {children}
    </div>
  )
}


function App() {
  {/* El board crea un array de 9 elementos y los rellena con el valor null */}
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = () => {

  }

  return (
    <main className='board' >
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
      {
        board.map(( square, index) => {
          return (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
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
    </main>
  )
}

export default App
