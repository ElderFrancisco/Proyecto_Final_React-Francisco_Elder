import './App.css';
import Navbar from './components/navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import Contacto from './pages/contacto';
import React from 'react';
import CartProvider from '../context/CartContext.jsx';

export const CartContext = React.createContext('');

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
