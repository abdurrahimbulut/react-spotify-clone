import React from 'react'
import styles from'./PlayingBar.module.scss';

const PlayingBar = (props) => {
    return (
        <div className={styles.PlayingBar}>
            {props.children}
        </div>
    )
}
export default PlayingBar;