import React from 'react'
import Button from '../Buttons/Button'
import Text from '../Typography/Text'
import styles from './PlayListItems.module.scss'
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getPlayList, getPlayListById} from "../../Redux/Actions/playListActions"
import { isSelected } from '../../Redux/Actions/NavbarActions.jsx'


const PlayListItems = () => {
    const playList = useSelector(state => state.playListReducer.playList);
    const selectedItem = useSelector(state => state.navbarSelectedItemReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPlayList());
    },[]);
    return (
        
        <div>
            <ul className={styles.List}>
                {
                    playList.map((pl)=>(
                        <li key={pl.id} className={styles.ListItem}>
                             <Button
                              onClick={()=>{ 
                                    dispatch(getPlayListById(pl.id));
                                    dispatch(isSelected("/playlist/"+pl.id));
                                }} 
                              href={`/playlist/${pl.id}`} >
                                  <Text secondColor={selectedItem.selected==="/playlist/"+pl.id ? false: true}  >
                                    {pl.title}
                                  </Text>
                            </Button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlayListItems
