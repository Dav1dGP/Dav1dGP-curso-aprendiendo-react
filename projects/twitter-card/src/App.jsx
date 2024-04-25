
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  const format = (userName) => `@${userName}`
  return (
    // <React.Fragment> para envolver dos elementos o mas, sin React.Fragment daria error
    // React.Fragment es lo mismo que <></>
    <section className='App'> 
    <TwitterFollowCard formatUserName={format} isFollowing={true} userName="Casey" name="Casey Neistat" />
    <TwitterFollowCard formatUserName={format} isFollowing={false} userName="ElonMusk" name="Elon Musk" />
    <TwitterFollowCard formatUserName={format} isFollowing userName="BarackObama" name="Barack Obama" />
    </ section>
  )
}
export default App

