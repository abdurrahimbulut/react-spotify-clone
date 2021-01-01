import {FETCH_PLAY_LIST_START,RECEIVE_PLAY_LIST,FETCH_PLAY_LIST_ERROR} from "../Actions/playListActions";

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    playList : []
}

const playListReducers=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_PLAY_LIST_START:
            return {
				...state,
				fetching: true
			};
        case FETCH_PLAY_LIST_ERROR:
            return {
				...state,
				fetching: false,
				error: action.payload
			};
        case RECEIVE_PLAY_LIST:
            return {
				...state,
				fetching: false,
				fetched: true,
				playList: action.payload
			};
        default:
            return state;
    }
}

export default playListReducers;