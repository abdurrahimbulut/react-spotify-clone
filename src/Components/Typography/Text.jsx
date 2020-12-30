import React from 'react'
import styles from './Text.module.scss'

const Text = ({bold,normal,...props}) => {
    return (
        <span className={bold && styles.Bold}>
            {props.children}
        </span>
    )
}

export default Text
