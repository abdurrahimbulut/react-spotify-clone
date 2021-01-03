import React from 'react'
import Button from '../Buttons/Button'
import Text from '../Typography/Text'
import styles from './PlayListItems.module.scss'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getPlayList} from "../../Redux/Actions/playListActions"


const PlayListItems = () => {
    const playList = useSelector(state => state.playListReducers.playList);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPlayList());
    },[]);
    return (
        
        <div>
            <ul className={styles.List}>
                {
                    playList.map((pl)=>(
                        <li key={pl.id} className={styles.ListItem}> <Button href={`/playlist/${pl.id}`} ><Text secondColor  >{pl.title}</Text></Button> </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlayListItems
