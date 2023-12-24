import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/reducers/numberSlice';
import { laptopSliceSelector } from './store/reducers/laptopSlice';
import LaptopComponent from './components/laptopComponent';

const App = () => {
  const number = useSelector((store) => store.numberSlice.number);
  const number2 = useSelector((store) => store.number2Slice.number);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> {number}</h1>

      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>

      <hr />

      {number2}

      <br />
      <br />

      <LaptopComponent />
    </div>
  );
};

export default App;
