export const PLAY_SONG ="PLAY_SONG";
export const PAUSE_SONG ="PAUSE_SONG";
export const CHANGE_SONG ="CHANGE_SONG";


export function playSong() {
    return {
        type :PLAY_SONG
    }
}

export function pauseSong() {
    return {
        type :PAUSE_SONG
    }
}

export function changeSong(songPath) {
    return {
        type :CHANGE_SONG,
        payload: songPath
    }
}

