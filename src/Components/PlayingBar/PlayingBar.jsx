import React,{useEffect, useState} from 'react'
import styles from'./PlayingBar.module.scss';
import { useSelector,useDispatch } from "react-redux";
import { playSong,pauseSong,changeSong } from "../../Redux/Actions/songActions";

const useAudio = () => {
    const state = useSelector(state => state.songReducer);
    const dispatch = useDispatch();
    const [audio,setAudio] = useState(new Audio(``));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);

    const handleChangeSong=(path) => {
        dispatch(changeSong(`${process.env.PUBLIC_URL}${path}`));
    }

    useEffect(() => {
        setAudio(new Audio(state.songPath));
      },[state.songPath]);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },[playing]);
  
    useEffect(() => {
        dispatch(changeSong(`${process.env.PUBLIC_URL}/songs/alla-beni-pulla-beni.mp3`));

      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle, handleChangeSong];
};


const PlayingBar = (props) => {
    
    const [playing, toggle,handleChangeSong] = useAudio();


  
    return (
        <div className={styles.PlayingBar}>
            <button onClick={()=>toggle()} >Play/Pause</button>
            <button onClick={()=>handleChangeSong("/songs/baris-manco-unutamadim.mp3")} >Değiştir</button>

        </div>
    )
}
export default PlayingBar;