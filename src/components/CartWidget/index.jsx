import cart4 from './cart4.svg';
import styles from './CartWidget.module.scss';

const CartWidget = ({ itemCount }) => {
  const count = itemCount ?? 0;
  return (
    <div className={styles.cartWidget}>
      <span>{count}</span>
      <img src={cart4} alt='cart' className={styles.cart} />
    </div>
  );
};

export default CartWidget;
