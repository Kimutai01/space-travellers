import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Nav() {
  return (
    <nav>
      <h3>space travellers Hub</h3>
      <ul className={styles.navLinks}>
        <Link className={styles.navStyle} to="/">
          <li>Rockets</li>
        </Link>
        <Link className={styles.navStyle} to="/missions">
          <li>Missions</li>
        </Link>
        <Link className={styles.navStyle} to="/profile">
          <li>My Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
