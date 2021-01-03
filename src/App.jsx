import styles from './App.module.scss';
import MainView from './Components/MainView/MainView';
import NavBar from './Components/NavBar/NavBar';
import PlayingBar from './Components/PlayingBar/PlayingBar';
import TopBar from "./Components/TopBar/TopBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IndexPage from './Pages/IndexPage';
import PlayListPage from './Pages/PlayListPage';

function App() {
  return (
    <div className={styles.Main}>
      <Router>
        <TopBar><h1>TopBar</h1></TopBar>
        <NavBar><h1>Navbar</h1></NavBar>
        <PlayingBar><h1>Playing Bar</h1></PlayingBar>
        <MainView>
          <Switch>
            <Route path={"/"} component={IndexPage} exact />
            <Route path={'/playlist/:id'} component={PlayListPage} />
          </Switch>
        </MainView>
      </Router>
    </div>
  );
}

export default App;
