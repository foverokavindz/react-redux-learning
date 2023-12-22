import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  //store eken return ekak gnn puluwan function ekak widiyata
  //useSelectore use krnnr store eka access krnn meka redux walin dena function ekak
  const number = useSelector((store) => store.number);

  // useDispatch hraha gnn reducer fuinction eken object eak pass krna eenaction eke ynne reducer eke action ekata
  // etapsse eee actions switch case hrha filter krla thaama action kra krgnne
  const dispatch = useDispatch();

  return (
    <div>
      {number}
      <br /> <br />
      <div>
        <button
          onClick={() => {
            dispatch({
              type: 'increment',
              payload: 7,
            });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'decrement',
              payload: 7,
            });
          }}
        >
          Decrement
        </button>
      </div>
      <br />
      <div>{number}</div>
    </div>
  );
};

export default App;
