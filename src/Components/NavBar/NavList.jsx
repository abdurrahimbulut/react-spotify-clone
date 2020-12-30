import React from 'react'
import NavButton from '../Buttons/NavButton'
import styles from './NavList.module.scss'

const NavList = () => {
    return (
        <ul className={styles.List}>
            <li className={styles.ListItem}>
                <NavButton href="link" >Ana Sayfa</NavButton>
            </li>
        </ul>
    )
}

export default NavList
