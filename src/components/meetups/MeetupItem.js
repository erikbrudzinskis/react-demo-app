import {useContext} from "react";

import styles from './MeetupItem.module.css'
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
    const favouritesCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouritesCtx.isItemFavourite(props.id);

    function toggleFavouriteStatusHandler() {
        if (itemIsFavourite) {
            favouritesCtx.removeFavourite(props.id);
        } else {
            favouritesCtx.addFavourite({
                id: props.id,
                title: props.title,
                imageUrl: props.image,
                description: props.description,
                address: props.address
            });
        }
    }

    return (
        <Card>
            <li className={styles.item}>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'To favourites'}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem;
