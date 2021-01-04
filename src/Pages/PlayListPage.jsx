import {React,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {getPlayListById} from "../Redux/Actions/playListActions.jsx"
import PlayListHeader from '../Components/PlayList/PlayListHeader.jsx'
import PlayListSongs from '../Components/PlayList/PlayListSongs'
const PlayListPage = () => {
    let {id}=useParams();
    const dispatch = useDispatch();
    const playListDetails = useSelector(state => state.playListDetailsReducer);
    const details = playListDetails.details;
    useEffect(()=>{
        dispatch(getPlayListById(id));
    },[]);

    return (
        <div>
            <PlayListHeader></PlayListHeader>
            <PlayListSongs></PlayListSongs>
            <h1>{playListDetails.fetching==false && details.title}</h1>
            <ul>
                {
                    playListDetails.fetching==true ?
                     "Loading":
                     playListDetails.fetched==true && 
                     details.songs.map(song => (
                        <li>{song.songName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlayListPage
