import React from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text = ({shortText,bold,normal,...props}) => {
    return (
        <span className={cn(styles.Text,bold && styles.Bold, shortText && styles.ShortText )}>
            {props.children}
        </span>
    )
}

export default Text
