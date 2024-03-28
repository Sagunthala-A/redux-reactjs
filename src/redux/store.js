// import {createStore , combineReducers} from "redux";
import {createStore} from "redux"
import counterReducer from "./reducer/counterReducer";

const store = createStore(counterReducer)
// if more than one reducer present then use combineReducers to get store the store
// const rootReducer = combineReducers({
//     counter: counterReducer
// })
// const store = createStore(rootReducer)

export default store;