import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { name: 'Aloe Vera', category: 'Succulents', cost: 5, image: '/assets/aloe.jpg' },
  { name: 'Peace Lily', category: 'Flowering', cost: 12, image: '/assets/peacelily.jpg' },
  { name: 'Snake Plant', category: 'Indoor', cost: 8, image: '/assets/snake.jpg' },
  { name: 'Fiddle Leaf', category: 'Indoor', cost: 20, image: '/assets/fiddle.jpg' },
  { name: 'Cactus', category: 'Succulents', cost: 4, image: '/assets/cactus.jpg' },
  { name: 'Orchid', category: 'Flowering', cost: 15, image: '/assets/orchid.jpg' },
];

const ProductList = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  const getQuantity = () => cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>Products (Cart items: {getQuantity()})</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.name} style={{ margin: '20px', border: '1px solid gray', padding: '10px' }}>
            <img src={p.image} alt={p.name} width="100" />
            <h3>{p.name}</h3>
            <p>${p.cost}</p>
            <button disabled={cart.find(i => i.name === p.name)} onClick={() => handleAdd(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;