import React from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

const Text = ({shortText,bold,normal, primaryColor, secondColor,className ,...props}) => {
    return (
        <span className={cn(styles.Text,bold && styles.Bold,
                            shortText && styles.ShortText,
                            primaryColor===true && styles.PrimaryColor,
                            secondColor===true && styles.SecondColor,className )}>
            {props.children}
        </span>
    )
}

export default Text
