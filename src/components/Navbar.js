import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import image from '../assets/planet.png';

function Nav() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={image} className={styles.planet} alt="planet" />
        <h2 className={styles.header}>Space Travelers</h2>
      </div>
      <div className="list-container">
        <ul className={styles.navLinks}>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}
            to="/"
          >
            <li>Rockets</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}
            to="/missions"
          >
            <li>Missions</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${styles.activeLink}` : undefined)}
            to="/profile"
          >
            <li>My Profile</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
