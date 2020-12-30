import React, { Children } from 'react'
import Button from './Button'
import styles from './NavButton.module.scss'
import cn from 'classnames';
const NavButton = ({href , selected ,children, ...props}) => {
    return (
        <Button href={href ? href : "#"} className={cn(styles.NavButton,selected && styles.Active)} full {...props}>
            {children}
        </Button>
    )
}

export default NavButton
