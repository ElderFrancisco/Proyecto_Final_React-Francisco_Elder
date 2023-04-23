import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
