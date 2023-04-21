import React from 'react';
import cart4 from './cart4.svg';
import styles from './CartWidget.module.scss';
import { useState } from 'react';

const CartWidget = ({ itemCount }) => {
  const [count, setCount] = useState(0);
  if (itemCount === '') {
    setCount(0);
  }

  return (
    <div className={styles.cartWidget}>
      <span>{count}</span>
      <img src={cart4} alt='cart' className={styles.cart} />
    </div>
  );
};

export default CartWidget;
