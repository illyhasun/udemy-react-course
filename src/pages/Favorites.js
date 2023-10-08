import { useContext } from 'react'

import FavoritesContext from '../store/favoritesContext'
import MeetupList from '../components/meetups/MeetupList'

export default function Favorites() {

  const favCtx = useContext(FavoritesContext)

  let content;
  
  if (favCtx.totalFavorites === 0) {
    content = <p>You got no favorites. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favCtx.favorites} />

  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  )
}
