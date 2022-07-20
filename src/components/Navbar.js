import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import './Navbar.scss';

function Nav() {
  return (
    <nav>
      <h3>space travellers Hub</h3>
      <ul className={styles.navLinks}>
        <Link
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          to="/"
        >
          <li>Rockets</li>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          to="/missions"
        >
          <li>Missions</li>
        </Link>
        <Link
          className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          to="/profile"
        >
          <li>My Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
