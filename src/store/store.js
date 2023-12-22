import { createStore } from 'redux';

//methna dana value eka dn redux store eke defualt value eka widiyata gihin thiyenne
const defaultState = {
  number: 0,
};

//mehema hadapu reduser functions wenama file ekak hdal dnn puluwan
const reducer = (state = defaultState, action) => {
  return state;
};

// create store eke reduser function eke default state eka methna pass krnne na
// eka reduser function eka athulema passs kra
// store ekak hdaddi default state ekak denna one

const store = createStore(reducer);

export default store;
