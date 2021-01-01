import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from "redux-thunk";
import playListReducers from "../Reducers/playListReducers"

const middleware =compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export function configureStore() {
    return createStore(playListReducers,middleware);
}