import React from 'react'
import Styles from './Card.module.scss'
import Button from '../Buttons/Button'
import PlayButton from '../Icon/PlayButton'
import Text from '../Typography/Text'

const Card = () => {
    return (
        <div className={Styles.Card}>
            <div className={Styles.Image}>
                <img src="/images/cardimage.jfif" alt=""/>
                <Button className={Styles.PlayButton}>
                    <PlayButton  />
                </Button>
            </div>
            <div  className={Styles.CardContent}>
                    <Text bold  className={Styles.PlayListTitle} >
                        Today's Top Hits Presents... Best Pop Songs of 2020
                    </Text>
                    <Text secondColor className={Styles.PlayListDescription}>
                        Our editors' picks for the best pop songs of the year! Cover: The Weeknd
                    </Text>
            </div>
            
        </div>
    )
}

export default Card
