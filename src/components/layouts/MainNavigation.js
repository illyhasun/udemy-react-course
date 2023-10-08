import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favoritesContext'


export default function MainNavigation() {

    const favCtx = useContext(FavoritesContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><NavLink to='/'>All Meetups</NavLink></li>
                    <li><NavLink to='/new'>New Meetup</NavLink></li>
                    <li><NavLink to='/favorites'>
                        Favorites
                        <span className={classes.badge}>{favCtx.totalFavorites}</span>
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
