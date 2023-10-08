import { createContext, useState } from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: favoritesMeetup => {},
    removeFavorite: meetupId => {},
    itemisFavorite: meetupId => {}
})


export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([])

    function addFavHandler(favoritesMeetup) {
        setUserFavorites((prevUserFav) => {
            return prevUserFav.concat(favoritesMeetup)
        })
    }
    function removeFavHandler(meetupId) {
        setUserFavorites((prevUserFav) => {
            return prevUserFav.filter((meetup) => meetup.id !== meetupId)
        })
    }

    function itemIsFavHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavHandler,
        removeFavorite: removeFavHandler,
        itemisFavorite: itemIsFavHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext