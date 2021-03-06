import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import { Provider } from 'react-redux';
import {configureStore} from './Redux/Store/configureStore.jsx';
//import {getPlayList, getPlayListById} from "./Redux/Actions/playListActions.jsx";
//import { isSelected } from "./Redux/Actions/NavbarActions";

const store = configureStore();

//store.dispatch(isSelected("/search"));

/*
store.subscribe(()=>{
  console.log(store.getState());
});
*/


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
