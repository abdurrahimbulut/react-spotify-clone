import React from 'react'
import Button from '../Buttons/Button';
import Logo from '../Icon/Logo';
import styles from'./NavBar.module.scss';

const NavBar = (props) => {
    return (
        <div className={styles.NavBar}> 
            <Logo width="131px" ></Logo>
            <Button href="/deneme">deneme url</Button>
            <Button>buton deneme</Button>
            
        </div>
    )
}
export default NavBar;