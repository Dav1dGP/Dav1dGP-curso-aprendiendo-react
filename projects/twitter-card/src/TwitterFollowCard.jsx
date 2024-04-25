import { userState } from 'react'

export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
    //console.log(isFollowing)


    
    const imageSrc =`https://unavatar.io/twitter/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'   
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

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
          <button className={buttonClassName}>
            {text}
          </button>
        </aside>
      </article>
    )
  }