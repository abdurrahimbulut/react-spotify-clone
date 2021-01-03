import {React,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {getPlayListById} from "../Redux/Actions/playListActions.jsx"

const PlayListPage = () => {
    let {id}=useParams();
    const dispatch = useDispatch();
    const playListDetails = useSelector(state => state.playListDetailsReducers);
    const details = playListDetails.details;
    useEffect(()=>{
        dispatch(getPlayListById(id));
    },[]);

    return (
        <div>
            <h1>{details.title}</h1>
            <ul>
                {
                    playListDetails.fetched==true && details.songs.map(song => (
                        <li>{song.songName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PlayListPage
