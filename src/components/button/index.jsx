import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const Boton = ({ to, text, ...rest }) => {
  return (
    <div className={styles.boton}>
      <Link to={to} {...rest}>
        {text}
      </Link>
    </div>
  );
};

export default Boton;
