import React from 'react'
import styles from'./NavBar.module.scss';

const NavBar = (props) => {
    return (
        <div className={styles.NavBar}> 
            {props.children}
            
        </div>
    )
}
export default NavBar;