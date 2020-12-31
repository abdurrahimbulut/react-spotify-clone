import {compose,applyMiddleware,createStore,combineReducers} from 'redux';
import thunk from "redux-thunk";
import playListReducers from "../Reducers/playListReducers"

const middleware =compose(applyMiddleware(thunk));


export function configureStore() {
    return createStore(playListReducers,
        middleware
        );
}