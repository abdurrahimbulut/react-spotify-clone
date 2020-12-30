import React from 'react'
import styles from './Title.module.scss'

const Title = (props) => {
    return (
        <h2 className={styles.deneme}>
            {props.Title}
        </h2>
    )
}

export default Title
