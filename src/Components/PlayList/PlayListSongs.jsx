import React from 'react'
import Button from '../Buttons/Button'
import PlayButton from '../Icon/PlayButton'
import MoreIcon from '../Icon/MoreIcon'
import Style from './PlayListSongs.module.scss'
const PlayListSongs = () => {
    return (
        <div className={Style.Root} >
            <div className={Style.Background}></div>
            <div className={Style.ActionBar}>
                <Button className={Style.PlayButton}><PlayButton  /></Button>
                <Button className={Style.MoreButton}><MoreIcon /></Button>
            </div>
            
        </div>
    )
}

export default PlayListSongs
