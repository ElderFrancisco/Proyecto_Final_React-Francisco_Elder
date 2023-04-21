import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import Boton from '../../components/button';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home1}>
        <h2>HotelFacil</h2>
        <Boton to={'/catalogo'} text={'Catalogo'} />
      </div>
      <div>
        <h2>¿Quienes somos?</h2>
        <p>somos una empresa de hoteles en todo el mundo,#1 en hoteleria</p>
        <Link to={'/catalogo'}>Catalogo</Link>
      </div>
    </div>
  );
};

export default Home;
