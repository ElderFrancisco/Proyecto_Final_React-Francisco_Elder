import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../db/firestore';

const AddProduct = () => {
  const itemsRef = collection(db, 'productos');
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputImage, setInputImage] = useState('');

  const addProduct = async (e) => {
    e.preventDefault();
    const item = {
      title: inputTitle,
      description: inputDescription,
      price: inputPrice,
      image: inputImage,
    };
    await addDoc(itemsRef, item);
  };

  return (
    <form onSubmit={addProduct}>
      <input
        type='text'
        placeholder='title'
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='description'
        onChange={(e) => setInputDescription(e.target.value)}
      />
      <input
        type='number'
        placeholder='price'
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <input
        type='text'
        placeholder='image'
        onChange={(e) => setInputImage(e.target.value)}
      />
      <button type='submit'>Agregar</button>
    </form>
  );
};

export default AddProduct;
