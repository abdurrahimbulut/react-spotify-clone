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
    useEffect(()=>{
        dispatch(getPlayListById(id));
    },[]);

    return (
        <div>
            <PlayListHeader title={playListDetails.details.title} />
            <PlayListSongs playListDetails={playListDetails} ></PlayListSongs>
            
        </div>
    )
}

export default PlayListPage
