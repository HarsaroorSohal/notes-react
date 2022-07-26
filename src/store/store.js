import {createStore} from 'redux';
import noteInputReducer from "./reducers/noteInputReducer"


const store = createStore(noteInputReducer);
export default store