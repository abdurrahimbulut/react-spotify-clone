import React from 'react'
import styles from'./MainView.module.scss';

const MainView = (props) => {
    return (
        <div className={styles.MainView}>
            {props.children}
            
        </div>
    )
}
export default MainView;