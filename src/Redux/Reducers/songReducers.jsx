import { PLAY_SONG,PAUSE_SONG,CHANGE_SONG } from "../Actions/songActions";

const playingSong ={
    songPath:"",
    play:true,
    pause:false,
    currentTime:0,
    songDuration:0
};

const songReducer=(state=playingSong,action) => {
    switch (action.type) {
        case CHANGE_SONG:
            return{
                    ...state,
                    songPath:action.payload
            }
        case PLAY_SONG:
            return{
                    ...state,
                    play:true,
                    pause:false
            }
        case PAUSE_SONG:
            return{
                ...state,
                play:false,
                pause:true
            }
        default:
            return state;
    }
}

export {
    songReducer
}