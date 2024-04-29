import { useEffect, useState } from 'react' 
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto')
  })

  return (
    <>
    <h1>Proyecto 3</h1>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

export default App
