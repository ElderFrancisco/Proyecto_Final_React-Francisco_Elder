import { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import db from '../../../db/firestore';
import { useState } from 'react';
import useCartContext from '../../../context/CartContext';
import styles from './itemList.module.scss';

const ItemList = () => {
  const itemsRef = collection(db, 'productos');
  const [items, setItems] = useState([]);
  const { addItem } = useCartContext();

  const onAdd = (quantity) => {
    addItem(item, quantity);
  };

  const getProducts = async () => {
    const itemCollection = await getDocs(itemsRef);
    const item = itemCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(item);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.maindiv}>
      {items.map((item) => (
        <div key={item.id} className={styles.cardcontainer}>
          <h1 className={styles.title}>{item.title}</h1>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} className={styles.Image} />
          <button className={styles.button}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
