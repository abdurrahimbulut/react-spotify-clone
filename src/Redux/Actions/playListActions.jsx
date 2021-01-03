import axios from 'axios';

export const FETCH_PLAY_LIST_START="FETCH_PLAY_LIST_START";
export const RECEIVE_PLAY_LIST="RECEIVE_PLAY_LIST";
export const FETCH_PLAY_LIST_ERROR="FETCH_PLAY_LIST_ERROR";

export const FETCH_PLAY_LIST_BY_ID_START="FETCH_PLAY_LIST_BY_ID_START";
export const RECEIVE_PLAY_LIST_BY_ID="RECEIVE_PLAY_LIST_BY_ID";
export const FETCH_PLAY_LIST_BY_ID_ERROR="FETCH_PLAY_LIST_BY_ID_ERROR";


export function getPlayList(){
    return dispatch => {
        dispatch({
            type: FETCH_PLAY_LIST_START
        });
        // _embed=songs => not included songs  just title and id 
        // _embed=songs => burada sadece başlık ve id bilgisini aldım. şarkı listesini almadım
        axios.get('https://my-json-server.typicode.com/abdurrahimbulut/react-spotify-clone/play-list/?_embed=songs')
            .then(response => response.data)
            .then(response =>dispatch({
                    type: RECEIVE_PLAY_LIST,
                    payload: response
            }))
            .catch(error => dispatch({
                type: FETCH_PLAY_LIST_ERROR,
                payload: error
            }))
    }
    
}   

export function getPlayListById(id){
    return dispatch => {
        dispatch({
            type: FETCH_PLAY_LIST_BY_ID_START
        });
        axios.get('https://my-json-server.typicode.com/abdurrahimbulut/react-spotify-clone/play-list/'+id)
            .then(response => response.data)
            .then(response =>{
                dispatch({
                    type: RECEIVE_PLAY_LIST_BY_ID,
                    payload: response
            })})
            .catch(error => dispatch({
                type: FETCH_PLAY_LIST_BY_ID_ERROR,
                payload: error
            }))
    }
    
}   



//https://www.npmjs.com/package/redux-promise-middleware