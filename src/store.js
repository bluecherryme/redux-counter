import { createStore } from 'redux';
import counter, {initialState} from './ducks/counter';



export default createStore(counter, initialState);