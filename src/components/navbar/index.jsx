import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <h1>
        <Link to={'/'}>HotelFacil</Link>
      </h1>
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        <li>
          <Link to={'/catalogo'}>catalogo</Link>
        </li>
        <li>
          <Link to={'/contacto'}>contacto</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
