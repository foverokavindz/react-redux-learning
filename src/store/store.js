import { createStore } from 'redux';

import reducer from './reducer/number';
// step - how change values in store

//store eke statew eka wens krna function eka thma dispatch() kiyne
const store = createStore(reducer);

export default store;
