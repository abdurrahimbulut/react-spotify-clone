import React from 'react'
import {
    Link
  } from "react-router-dom";
import cn from 'classnames';
import styles from './Button.module.scss';
import { useEffect } from "react";


const LinkButton = ({href, children,...props}) => {

    return (
        <Link  to={href} {...props} >
            {children}
        </Link>
    )
}

const BaseButton = ({children,...props}) => {
    return (
        <button  type="button"  {...props} >
            {children}
        </button>
    )
}

const Button = ({ full = false , children ,className, ...props}) => {
    const Tag = props.href ? LinkButton : BaseButton;
    return (
        <Tag   className={cn(styles.Button, full && styles.fullWidth , className)}  {...props}>
            {children}
        </Tag>
    )
}

export default Button
