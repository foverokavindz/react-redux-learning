import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLaptop, laptopSliceSelector } from '../store/reducers/laptopSlice';

const LaptopComponent = () => {
  const laptopData = useSelector(laptopSliceSelector);
  const dispatch = useDispatch();

  const price = useRef();
  const cpu = useRef();
  const gen = useRef();
  const ram = useRef();
  const hdd = useRef();

  const addLaptopHandle = () => {
    dispatch(
      addLaptop(
        price.current.value,
        cpu.current.value,
        gen.current.value,
        ram.current.value,
        hdd.current.value
      )
    );
  };

  return (
    <div>
      {laptopData.map((el) => (
        <p key={el.id}>
          {el.price} | {el.spec.cpu}| {el.spec.gen}| {el.spec.ram}|{' '}
          {el.spec.hdd}
        </p>
      ))}

      <div>
        <h4>Add laptop</h4>
        <input ref={price} type="text" placeholder="enter price" /> <br />
        <input ref={cpu} type="text" placeholder="enter cpu" /> <br />
        <input ref={gen} type="text" placeholder="enter gen" /> <br />
        <input ref={ram} type="text" placeholder="enter ram" /> <br />
        <input ref={hdd} type="text" placeholder="enter hdd" /> <br />
        <br />
        <button onClick={addLaptopHandle}>Add Laptop</button>
      </div>
    </div>
  );
};

export default LaptopComponent;
