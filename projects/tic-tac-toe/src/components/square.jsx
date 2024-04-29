//Creamos el cuadrado del tablero. CHildren es lo que queremos mostrar dentro del tablero, 
//updateBoard es la forma de actualizar el tablero y el index para saber el cuadradito que indice es
export const Square = ({ children, isSelected, updateBoard, index}) => {
  
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