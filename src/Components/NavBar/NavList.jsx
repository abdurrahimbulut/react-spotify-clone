import React, { useState, useEffect } from 'react'
import NavButton from '../Buttons/NavButton'
import Collection from '../Icon/Collection'
import Home from '../Icon/Home'
import HomeActive from '../Icon/HomeActive'
import Search from '../Icon/Search'
import Text from '../Typography/Text'
import styles from './NavList.module.scss'


const NavList = (props) => {
    const [selectedItem, setSelectedItem] = useState("State Boş");
    useEffect(() => {
        setSelectedItem(window.location.pathname)
    }, [])

    return (
        <ul className={styles.List}>
            {console.log(selectedItem)}
            <li className={styles.ListItem}>
                <NavButton href="/" selected={selectedItem==="/" ? true : false} onClick={()=>setSelectedItem("/")} ><HomeActive /><Text bold>Ana sayfa</Text></NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/search" selected={selectedItem==="/search" ? true : false} onClick={()=>setSelectedItem("/search")} ><Search /><Text bold>Ara</Text></NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/collection"  selected={selectedItem==="/collection" ? true : false} onClick={()=>setSelectedItem("/collection")}><Collection /><Text bold>Kitaplığın</Text></NavButton>
            </li>
        </ul>
    )
}

export default NavList
