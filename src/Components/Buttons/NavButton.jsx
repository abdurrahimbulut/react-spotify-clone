import React, { Children } from 'react'
import Button from './Button'
import styles from './NavButton.module.scss'

const NavButton = ({href ,children, ...props}) => {
    return (
        <Button href={href} className={styles.NavButton} full {...props}>
            {children}
        </Button>
    )
}

export default NavButton
