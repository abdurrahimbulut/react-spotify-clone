import React from 'react'
import styles from './Text.module.scss'

const Text = ({bold,normal,...props}) => {
    return (
        <span>
            {props.children}
        </span>
    )
}

export default Text
