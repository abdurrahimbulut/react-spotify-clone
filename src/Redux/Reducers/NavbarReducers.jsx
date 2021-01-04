import { CHANGE_SELECTED_ITEM } from "../Actions/navbarActions.jsx";

const navbarState = {
    selected:""
}

const navbarSelectedItemReducer=(state=navbarState,action)=>{
    switch (action.type) {
        case CHANGE_SELECTED_ITEM:
            return {
                ...state,
                selected:action.payload
            };
        default:
            return state;
    }
}

export {
    navbarSelectedItemReducer
}