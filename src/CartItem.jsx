import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1)
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleCheckoutShopping = () => alert('Functionality to be added for future reference');

  return (
    <div>
      <h2>Total Cart Amount: ${totalAmount}</h2>
      {cart.map(item => (
        <div key={item.name} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <img src={item.image} alt={item.name} width="50" />
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.cost}</p>
          <p>Quantity: 
            <button onClick={() => handleDecrement(item)}>-</button>
            {item.quantity}
            <button onClick={() => handleIncrement(item)}>+</button>
          </p>
          <p>Total: ${item.cost * item.quantity}</p>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
      <button onClick={handleCheckoutShopping}>Checkout</button>
    </div>
  );
};

export default CartItem;