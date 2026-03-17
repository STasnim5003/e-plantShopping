import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
    // Succulents
    { name: 'Aloe Vera', category: 'Succulents', cost: '$5', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Aloe_vera_flower_inset.png' },
    { name: 'Cactus', category: 'Succulents', cost: '$4', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gymnocalycium_mihanovichii.jpg' },
    { name: 'Jade Plant', category: 'Succulents', cost: '$6', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Crassula_ovata.jpg/640px-Crassula_ovata.jpg' },
    { name: 'Echeveria', category: 'Succulents', cost: '$7', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Echeveria_purpusorum.jpg/640px-Echeveria_purpusorum.jpg' },
    { name: 'Haworthia', category: 'Succulents', cost: '$5', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Haworthia_fasciata_ne1.jpg/640px-Haworthia_fasciata_ne1.jpg' },
    { name: 'Sedum', category: 'Succulents', cost: '$4', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sedum_spathulifolium_crop.jpg/640px-Sedum_spathulifolium_crop.jpg' },
  
    // Flowering
    { name: 'Peace Lily', category: 'Flowering', cost: '$12', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/640px-Spathiphyllum_cochlearispathum_RTBG.jpg' },
    { name: 'Orchid', category: 'Flowering', cost: '$15', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Orchid_high_res.jpg/640px-Orchid_high_res.jpg' },
    { name: 'Anthurium', category: 'Flowering', cost: '$14', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Anthurium_andraeanum.jpg/640px-Anthurium_andraeanum.jpg' },
    { name: 'Begonia', category: 'Flowering', cost: '$10', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Tuberous_begonia_AVB.jpg/640px-Tuberous_begonia_AVB.jpg' },
    { name: 'Bromeliad', category: 'Flowering', cost: '$11', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Guzmania_bromeliad.jpg/640px-Guzmania_bromeliad.jpg' },
    { name: 'Kalanchoe', category: 'Flowering', cost: '$9', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kalanchoe_blossfeldiana.jpg/640px-Kalanchoe_blossfeldiana.jpg' },
  
    // Indoor
    { name: 'Snake Plant', category: 'Indoor', cost: '$8', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Sansevieria_trifasciata_habit.jpg/640px-Sansevieria_trifasciata_habit.jpg' },
    { name: 'Fiddle Leaf', category: 'Indoor', cost: '$20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_lyrata.jpg/640px-Ficus_lyrata.jpg' },
    { name: 'Pothos', category: 'Indoor', cost: '$6', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Epipremnum_aureum_31082012.jpg/640px-Epipremnum_aureum_31082012.jpg' },
    { name: 'ZZ Plant', category: 'Indoor', cost: '$10', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/thirty/Zamioculcas_zamiifolia.jpg/640px-Zamioculcas_zamiifolia.jpg' },
    { name: 'Spider Plant', category: 'Indoor', cost: '$7', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.jpg/640px-Chlorophytum_comosum_0001.jpg' },
    { name: 'Monstera', category: 'Indoor', cost: '$18', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Monstera_deliciosa_-_leaves.jpg/640px-Monstera_deliciosa_-_leaves.jpg' },
  ];

const categories = ['Succulents', 'Flowering', 'Indoor'];

const ProductList = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (product) => dispatch(addItem(product));
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <h2>Cart Items: {totalQty}</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>                          {/* category header */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.filter(p => p.category === cat).map(p => (
              <div key={p.name} style={{ margin: '20px', border: '1px solid gray', padding: '10px' }}>
                <img src={p.image} alt={p.name} width="100" />
                <h3>{p.name}</h3>
                <p>{p.cost}</p>                   {/* no extra $ here */}
                <button
                  disabled={!!cart.find(i => i.name === p.name)}
                  onClick={() => handleAdd(p)}
                >
                  {cart.find(i => i.name === p.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;