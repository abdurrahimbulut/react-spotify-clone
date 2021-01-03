import {
    FETCH_PLAY_LIST_START,
    RECEIVE_PLAY_LIST,
    FETCH_PLAY_LIST_ERROR,
    FETCH_PLAY_LIST_BY_ID_START,
    RECEIVE_PLAY_LIST_BY_ID,
    FETCH_PLAY_LIST_BY_ID_ERROR,
    
} from "../Actions/playListActions";

const playList = {
    fetching: false,
    fetched: false,
    error: null,
    playList : []
}

const playListReducers=(state=playList,action)=>{
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



const  playListDetails ={
    fetching: false,
    fetched: false,
    error: null,
    details : {}
}

const playListDetailsReducers=(state=playListDetails,action)=>{
    switch (action.type) {
        case FETCH_PLAY_LIST_BY_ID_START:
            return {
				...state,
				fetching: true
			};
        case FETCH_PLAY_LIST_BY_ID_ERROR:
            return {
				...state,
				fetching: false,
				error: action.payload
			};
        case RECEIVE_PLAY_LIST_BY_ID:
            return {
				...state,
				fetching: false,
				fetched: true,
				details: action.payload
			};
        default:
            return state;
    }
}

export {
    playListReducers,
    playListDetailsReducers
};