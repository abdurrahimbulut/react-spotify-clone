import React from 'react'
import Button from '../Buttons/Button'
import PlayButton from '../Icon/PlayButton'
import MoreIcon from '../Icon/MoreIcon'
import Style from './PlayListSongs.module.scss'
import {useDispatch } from 'react-redux'
import {changeSong} from '../../Redux/Actions/songActions'

const PlayListSongs = ({playListDetails}) => {
    const dispatch = useDispatch();
    return (
        <div className={Style.Root} >
            <div className={Style.Background}></div>
            <div className={Style.ActionBar}>
                <Button className={Style.PlayButton}><PlayButton  /></Button>
                <Button className={Style.MoreButton}><MoreIcon /></Button>
            </div>
            
            <ul>
                {
                    playListDetails.fetching==true ?
                     "Loading":
                     playListDetails.fetched==true && 
                     playListDetails.details.songs.map(song => (
                        <li className={Style.ListItem} onClick={()=>dispatch(changeSong(song.songUrl))}  >{song.artist + "-" + song.songName}</li>
                    ))
                }
            </ul>
            <h4>Çalmak istediğiniz şarkıya tıklayınız</h4>

        </div>
    )
}

export default PlayListSongs
