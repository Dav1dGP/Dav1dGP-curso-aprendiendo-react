
import './App.css'

function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="El avatar de Casey Neistat" src="https://unavatar.io/youtube/casey" />
        <div>
        <strong className='tw-followCard-info'>Casey Neistat</strong>
        <span className='tw-followCard-infoUserName'>@casey</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default App
