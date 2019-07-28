
import {createStore} from 'redux';
import reducer from '../reducers/guilty-person-reducer';


const store = createStore(reducer);
export default store;