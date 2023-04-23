import React, { useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => React.useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id) ? true : false;
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((i) => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity + quantity };
          }
          return i;
        }),
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        isInCart,
        removeItem,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
