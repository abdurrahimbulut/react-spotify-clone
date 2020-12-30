import React from 'react'
import Button from '../Buttons/Button';
import Logo from '../Icon/Logo';
import styles from'./NavBar.module.scss';
import NavList from './NavList';

const NavBar = (props) => {
    return (
        <div className={styles.NavBar}> 
            <div className={styles.NavHeader}>
                <Logo width="131px" ></Logo>
            </div>
            <NavList/>
        </div>
    )
}
export default NavBar;