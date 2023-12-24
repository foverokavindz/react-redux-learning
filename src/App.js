import { useDispatch, useSelector } from 'react-redux';
import { selectLaptop } from './store/reducers/laptopSlice';
import {
  addItemToCart,
  removeItemFromCart,
  selectCart,
  removeOneItemFromCart,
} from './store/reducers/cartSlice';

const App = () => {
  const laptop = useSelector(selectLaptop);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  let total = 0;
  let itemCount = 0;

  if (cart.length > 0) {
    cart.forEach((el) => {
      total += el.count * el.price;
      itemCount += el.count;
    });
  } else {
    total = 0;
  }

  return (
    <div>
      {laptop.map(({ id, cpu, ram, price }) => (
        <p key={id}>
          {price} | {cpu} | {ram}
          <button onClick={() => dispatch(addItemToCart(id, cpu, ram, price))}>
            Add to cart
          </button>
        </p>
      ))}

      <br />
      <h1>Cart</h1>
      <hr />

      <h3>items x {itemCount}</h3>
      {cart.map(({ id, cpu, ram, price, count }) => (
        <p key={id}>
          ({price} | {cpu} | {ram}) x {count}{' '}
          <button onClick={() => dispatch(removeOneItemFromCart(id))}>
            Remove one
          </button>{' '}
          <button onClick={() => dispatch(removeItemFromCart(id))}>
            Delete
          </button>
        </p>
      ))}
      <h3>total price - Rs:{total}</h3>
    </div>
  );
};

export default App;
