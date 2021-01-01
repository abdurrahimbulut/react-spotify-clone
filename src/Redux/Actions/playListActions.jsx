import axios from 'axios';

export const FETCH_PLAY_LIST_START="FETCH_PLAY_LIST_START";
export const RECEIVE_PLAY_LIST="RECEIVE_PLAY_LIST";
export const FETCH_PLAY_LIST_ERROR="FETCH_PLAY_LIST_ERROR";


export function getPlayList(){

    return dispatch => {
        dispatch({
            type: FETCH_PLAY_LIST_START
        });
        axios.get('https://my-json-server.typicode.com/abdurrahimbulut/react-spotify-clone/play-list')
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

//https://www.npmjs.com/package/redux-promise-middleware