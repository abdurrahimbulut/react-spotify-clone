import React, { useState, useEffect } from 'react'
import NavButton from '../Buttons/NavButton'
import Collection from '../Icon/Collection'
import CollectionActive from '../Icon/CollectionActive'
import Home from '../Icon/Home'
import HomeActive from '../Icon/HomeActive'
import Search from '../Icon/Search'
import SearchActive from '../Icon/SearchActive'
import Text from '../Typography/Text'
import styles from './NavList.module.scss'
import { isSelected } from '../../Redux/Actions/navbarActions.jsx'
import { useDispatch, useSelector } from 'react-redux'


const NavList = (props) => {
    const selectedItem = useSelector(state => state.navbarSelectedItemReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isSelected(window.location.pathname))
    }, [])

    return (
        <ul className={styles.List}>
            <li className={styles.ListItem}>
                <NavButton href="/" selected={selectedItem.selected === "/" ? true : false} onClick={() => dispatch(isSelected("/"))} >
                    {selectedItem.selected === "/" ? <HomeActive /> : <Home />}<Text bold>Ana sayfa</Text>
                </NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/search" selected={selectedItem.selected === "/search" ? true : false} onClick={() => dispatch(isSelected("/search"))} >
                    {selectedItem.selected==="/search" ? <SearchActive /> : <Search />}<Text bold>Ara</Text>
                </NavButton>
            </li>
            <li className={styles.ListItem}>
                <NavButton href="/collection" selected={selectedItem.selected === "/collection" ? true : false} onClick={() => dispatch(isSelected("/collection"))}>
                    {selectedItem.selected==="/collection" ? <CollectionActive /> : <Collection />}<Text bold>Kitaplığın</Text>
                </NavButton>
            </li>
        </ul>
    )
}

export default NavList
