//methna dana value eka dn redux store eke defualt value eka widiyata gihin thiyenne
const defaultState = {
  number: 0,
};

//mehema hadapu reduser functions wenama file ekak hdal dnn puluwan
const reducer = (state = defaultState, action) => {
  if (action.type === 'increment') {
    return {
      number: state.number + action.payload,
    };
  } else if (action.type === 'decrement') {
    return {
      number: state.number - action.payload,
    };
  }
  return state;
};

export default reducer;
