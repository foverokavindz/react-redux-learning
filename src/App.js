import { useSelector } from 'react-redux';

const App = () => {
  //store eken return ekak gnn puluwan function ekak widiyata
  //meken access wenne store eka
  const number = useSelector((store) => store.number);

  return <div>{number}</div>;
};

export default App;
