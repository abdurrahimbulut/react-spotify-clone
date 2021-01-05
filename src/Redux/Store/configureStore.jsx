import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from "redux-thunk";
import {playListReducer,playListDetailsReducer} from "../Reducers/playListReducers.jsx"
import { navbarSelectedItemReducer } from "../Reducers/navbarReducers.jsx";
import { songReducer } from "../Reducers/songReducers.jsx";


const middleware =compose(
    applyMiddleware(thunk)
    /*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);
const rootReducer =combineReducers({
    playListReducer,
    playListDetailsReducer,
    navbarSelectedItemReducer,
    songReducer
});

export function configureStore() {
    return createStore(rootReducer,middleware);
}