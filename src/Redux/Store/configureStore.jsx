import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from "redux-thunk";
import {playListReducers,playListDetailsReducers} from "../Reducers/playListReducers"

const middleware =compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootReducer =combineReducers({
    playListReducers,
    playListDetailsReducers
});

export function configureStore() {
    return createStore(rootReducer,middleware);
}