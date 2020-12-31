import React from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text = ({bold,normal,...props}) => {
    return (
        <span className={cn(styles.Text,bold && styles.Bold)}>
            {props.children}
        </span>
    )
}

export default Text
