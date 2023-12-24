import { useState } from 'react';
import { produce } from 'immer';

const obj = {
  name: 'amila',
  city: 'Tangalle',
  position: 'Web Developer',
  address: {
    add1: 'nuwara',
  },
};

const App = () => {
  const [test, setTest] = useState({ ...obj });

  const clickHandle = () => {
    // react waladi producer function eka athulta prev state eka denna one na...specily react walt puluwan pre stat eka producer dunction ekt automaticaly arn new state ekk hdnna
    // spread kr kr object copy arn wens krna ekt lesi widiyak thma Immer eken krnne
    setTest(
      produce((prevState) => {
        prevState.address.add2 = 'Colombo';
      })
    );
  };

  return (
    <div>
      <button onClick={clickHandle}>Click me</button>
      {console.log(test)}
    </div>
  );
};

export default App;
