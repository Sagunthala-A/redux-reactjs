import { INCREASE, DECREASE,RESET } from "../action/actionTypes";

const initialState = 0;

// this state parameter will come from store which gives current state value
// action is action object which will come from where we use dispatch function
function counterReducer (state=initialState,action){
    switch(action.type){
        case INCREASE:
            return state+action.value;
        case DECREASE:
            return state-action.value;
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default counterReducer;