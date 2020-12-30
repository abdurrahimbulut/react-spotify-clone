import styles from'./App.module.scss';
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <div className={styles.Main}>
      <TopBar><h1>TopBar</h1></TopBar>
      
    </div>
  );
}

export default App;
