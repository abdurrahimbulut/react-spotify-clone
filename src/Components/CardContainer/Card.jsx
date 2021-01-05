import React from 'react'
import Styles from './Card.module.scss'
import Button from '../Buttons/Button'
import PlayButton from '../Icon/PlayButton'
const Card = () => {
    return (
        <div className={Styles.Card}>
            <div className={Styles.Image}>
                <img src="/images/cardimage.jfif" alt=""/>
                <Button className={Styles.PlayButton}>
                    <PlayButton  />
                </Button>
            </div>
            
        </div>
    )
}

export default Card
