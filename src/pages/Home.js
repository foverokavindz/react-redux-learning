import React from 'react';
import Button from '../components/Button';

//state Management
import { useDispatch, useSelector } from 'react-redux';
import { numberDecrement, numberIncrement } from '../store/reducer/number';

export const Home = () => {
  const number = useSelector((store) => store.number);
  const dispatch = useDispatch();

  const homeStyles = {
    marginTop: '100px',
  };
  return (
    <div>
      <hr />
      <div style={homeStyles}>home {number}</div>

      <div>
        <Button
          displayName={'Increment Number'}
          triggerFunction={() => {
            dispatch(numberIncrement(1));
          }}
        />
        <br />
        <Button
          displayName={'Decriment Number'}
          triggerFunction={() => {
            dispatch(numberDecrement(1));
          }}
        />
      </div>
    </div>
  );
};
