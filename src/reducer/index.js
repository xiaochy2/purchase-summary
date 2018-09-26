import { combineReducers } from 'redux';

const initialState = false;

const isPromo = (state = initialState, action) => {
    switch (action.type) {
        case "APPLY": return true;
        default: return state;
    }
}

const reducer = combineReducers({
    isPromo
})
export default reducer;