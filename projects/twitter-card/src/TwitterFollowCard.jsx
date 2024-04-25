export function TwitterFollowCard({ formatUserName, userName, name, isFollowing}) {
    //console.log(isFollowing)
    const imageSrc =`https://unavatar.io/twitter/${userName}`    
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
          <button className='tw-followCard-button'>
            Seguir
          </button>
        </aside>
      </article>
    )
  }