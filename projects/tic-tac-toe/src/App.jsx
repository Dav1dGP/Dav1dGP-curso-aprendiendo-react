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
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

function App() {
  {/* El board crea un array de 9 elementos y los rellena con el valor null */}
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  // null es que no hay ganador, false es que hay un empate
  const[winner, setWinner] = useState(null) 

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinacioens ganadores para ver si X u = ganó
    for (const combo of WINNER_COMBOS){
      const [a,b,c] = combo
    
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  //si no hay ganador
  return null

  }

  const updateBoard = (index) => {
    // no actualizar esta posición si ya tiene algo
    if (board[index] || winner) return
    //newBoard igual a board, se hace un Spread Operator
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar e turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } // TODO: check if game is over
  }

  return (
    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className="game">
      {
        
        board.map(( square, index) => {
          return (
            
            <Square // Componente que hemos hecho para cada uno de los cuadritos
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

       {
       winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>
              {
                winner === false
                ? 'Empate'
                : 'Ganó: ' + winner
              }
            </h2>
            <header className="win">
              {winner && <Square>{winner}</Square> }
            </header>
            <footer>
              <button>Empezar de nuevo</button>
            </footer>


          </div>
          </section>
       )
       } 
    </main>
  )
}

export default App
