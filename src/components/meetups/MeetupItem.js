import { useContext } from 'react'

import FavoritesContext from '../../store/favoritesContext'
import Card from '../ui/Card'
import classes from './MeetupItem.module.css'

export default function MeetupItem(props) {
    const favCtx = useContext(FavoritesContext)

    const itemIsFav = favCtx.itemisFavorite(props.id)

    function toogleFavHandler() {
        if (itemIsFav) {
            favCtx.removeFavorite(props.id)
        } else {
            favCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toogleFavHandler}>
                        {itemIsFav ? 'Remove from favorites' : 'Add to favorites '}
                    </button>
                </div>
            </Card>
        </li>
    )
}
