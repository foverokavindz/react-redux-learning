import { useDispatch, useSelector } from 'react-redux';
import { getPost, selectAllPost } from './store/reducers/postSlice';

const App = () => {
  const postObj = useSelector(selectAllPost);
  const dispatch = useDispatch();

  console.log('postObj   ', postObj);
  return (
    <div>
      {postObj.loading === 'pending' && <h1>Loading data....</h1>}
      <button onClick={() => dispatch(getPost(1))}>Get Data</button>
    </div>
  );
};

export default App;
