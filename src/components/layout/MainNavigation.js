import {useContext} from "react";
import {Link} from "react-router-dom";

import styles from './MainNavigation.module.css'
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li><Link to='/favourites'>
                        Favourites
                        <span className={styles.badge}>{favouritesCtx.totalFavourites}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;
