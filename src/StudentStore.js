import { applyMiddleware, combineReducers, createStore } from "redux";
import SList from "./SReducer";
import thunk from 'redux-thunk';

const MainReducer=combineReducers({SList})
const StudentStore=createStore(MainReducer,applyMiddleware(thunk));

export default StudentStore;