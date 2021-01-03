import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from "redux-thunk";
import {playListReducer,playListDetailsReducer} from "../Reducers/playListReducers"
import { navbarSelectedItemReducer } from "../Reducers/navbarReducers";

const middleware =compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootReducer =combineReducers({
    playListReducer,
    playListDetailsReducer,
    navbarSelectedItemReducer
});

export function configureStore() {
    return createStore(rootReducer,middleware);
}