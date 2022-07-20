import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { images } from '../constants/export';

function Nav() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={images.space} className={styles.planet} alt="planet" />
        <h2 className={styles.header}>Space Travelers</h2>
      </div>
      <div className="list-container">
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
      </div>
    </nav>
  );
}

export default Nav;
