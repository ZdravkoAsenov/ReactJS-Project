import { Link, Outlet } from "react-router-dom";
import styles from './Header.module.css';

const Header = ({ loggedIn }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>My news</div>
        </div>
        <div className={styles.center}>
          <nav className={styles.navLinks}>
            <a href="/" className={styles.link}>Home</a>
            <Link to="/add-news" className={styles.link}>Add News</Link>
            <a href="/all-news" className={styles.link}>All News</a>
            {/* Add more links as needed */}
          </nav>
        </div>
        <div className={styles.right}>
          {loggedIn ? (
            <button className={styles.logout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className={styles.login}>Login</Link>
              <Link to="/register" className={styles.register}>Register</Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
