import styles from'./App.module.scss';
import MainView from './Components/MainView/MainView';
import NavBar from './Components/NavBar/NavBar';
import PlayingBar from './Components/PlayingBar/PlayingBar';
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div className={styles.Main}>
      <TopBar><h1>TopBar</h1></TopBar>
      <NavBar><h1>Navbar</h1></NavBar>
      <PlayingBar><h1>Playing Bar</h1></PlayingBar>
      <MainView/>
      
    </div>
  );
}

export default App;
