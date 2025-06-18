import styles from "./HdoNav.module.css";
import { NavLink } from "react-router-dom";

export default function HdoNav() {
  return (
    <nav className={styles.hdoNav}>
      <Logo />
      <NavList />
    </nav>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoHdo}>H</div>
      <div className={styles.logoText}>
        <h3>HDO BOX</h3>
        <p>Best Tracker Ever</p>
      </div>
    </div>
  );
}

function NavList() {
  return (
    <ul className={styles.navbar}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <i className="fa-solid fa-film"></i>
          <span>Movie</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tvshows"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <i className="fa-solid fa-tv"></i>
          <span>TV Show</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
  );
}
