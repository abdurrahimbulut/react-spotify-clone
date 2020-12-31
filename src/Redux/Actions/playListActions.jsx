import axios from 'axios';


export function getPlayList(){

    return dispatch => {
        dispatch({
            type: 'FETCH_PLAY_LIST_START'
        });
    
        axios.get('https://my-json-server.typicode.com/abdurrahimbulut/react-spotify-clone/play-list')
            .then(response => { console.log(response.data);
                return response.data})
            .then(response => dispatch({
                type: 'RECEIVE_PLAY_LIST',
                payload: response
            }))
            .catch(error => dispatch({
                type: 'FETCH_PLAY_LIST_ERROR',
                payload: error
            }))
    }
    
}   