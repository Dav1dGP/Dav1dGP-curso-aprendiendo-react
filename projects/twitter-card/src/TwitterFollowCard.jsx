import { useState } from 'react'

export function TwitterFollowCard ({ formatUserName, userName, name }) {
    //console.log(isFollowing)
    const [isFollowing, setIsFollowing] = useState(false)


    const imageSrc =`https://unavatar.io/twitter/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'   
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar' alt="El avatar de Casey Neistat" src={imageSrc} />
          <div>
          <strong className='tw-followCard-info'>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
          </button>
        </aside>
      </article>
    )
  }