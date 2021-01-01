import React from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text = ({shortText,bold,normal, primaryColor, secondColor ,...props}) => {
    return (
        <span className={cn(styles.Text,bold && styles.Bold,
                            shortText && styles.ShortText,
                            primaryColor && styles.PrimaryColor,
                            secondColor && styles.SecondColor, )}>
            {props.children}
        </span>
    )
}

export default Text
