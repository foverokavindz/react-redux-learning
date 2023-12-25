import { useDispatch, useSelector } from 'react-redux';
import { getPost, selectAllPost } from './store/reducers/postSlice';
import { increment, numberSelector } from './store/reducers/numberSlice';

const App = () => {
  // store eke action ekakin wenas weemak unama store eka ai render wenwa
  // wena wenwa file unama store eka eka object ekak
  // meka ntha krnna adala thana mention krla denna one
  // eka krnna createSelecter kiyna eka one wenwa
  const postObj = useSelector(selectAllPost);
  const number = useSelector(numberSelector);
  const dispatch = useDispatch();

  console.log('postObj   ', postObj);
  return (
    <div>
      {postObj.loading === 'pending' && <h1>Loading data....</h1>}
      <button onClick={() => dispatch(getPost(1))}>Get Data</button>

      <br />
      <h1>{number}</h1>
      <button onClick={() => dispatch(increment('name', 7, 'mathara'))}>
        increment
      </button>
    </div>
  );
};

export default App;
