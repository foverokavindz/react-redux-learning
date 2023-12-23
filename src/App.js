import { useDispatch, useSelector } from 'react-redux';
import { numberDecrement, numberIncrement } from './store/reducer/number';
import { Home } from './pages/Home';

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
            /* meka hama thissema liynwt wada action ekk generate krna function ekak liynn puluwan */
            /* 
            
            dispatch({
              type: 'increment',
              payload: 7,
            });

            */

            // methanama payload eka denn puluwan
            dispatch(numberIncrement(1));
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(numberDecrement(1));
          }}
        >
          Decrement
        </button>
      </div>
      <br />
      <div>{number}</div>
      <Home />
    </div>
  );
};

export default App;
