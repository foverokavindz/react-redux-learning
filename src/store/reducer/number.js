//methna dana value eka dn redux store eke defualt value eka widiyata gihin thiyenne
const defaultState = {
  number: 0,
};

// err ena nisa enem wage hdnwa
const numberAction = {
  INC: 'increment',
  DEC: 'decrement',
};

// action ekata adalawa object ekk generate krnna function ekk hdnn One
export const numberIncrement = (payload) => {
  return {
    type: numberAction.INC,
    payload,
  };
};

export const numberDecrement = (payload) => {
  return {
    type: numberAction.DEC,
    payload,
  };
};

//mehema hadapu reduser functions wenama file ekak hdal dnn puluwan
const reducer = (state = defaultState, action) => {
  if (action.type === numberAction.INC) {
    return {
      number: state.number + action.payload,
    };
  } else if (action.type === numberAction.DEC) {
    return {
      number: state.number - action.payload,
    };
  }
  return state;
};

export default reducer;
