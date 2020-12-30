import React from 'react'
import styles from'./TopBar.module.scss';

const TopBar = (props) => {
    return (
        <div className={styles.TopBar}>
            {props.children}
        </div>
    )
}

export default TopBar;