import React from 'react'
import NavButton from '../Buttons/NavButton'
import Collection from '../Icon/Collection'
import Home from '../Icon/Home'
import HomeActive from '../Icon/HomeActive'
import Search from '../Icon/Search'
import Text from '../Typography/Text'
import styles from './NavList.module.scss'

const NavList = () => {
    return (
        <ul className={styles.List}>
            <li className={styles.ListItem}>
                <NavButton href="/index" selected ><HomeActive /><Text bold>Ana sayfa</Text></NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/index" ><Search /><Text bold>Ara</Text></NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/index" ><Collection /><Text bold>Kitaplığın</Text></NavButton>
            </li>
        </ul>
    )
}

export default NavList
