import { Link, Outlet } from "react-router-dom";
import styles from './Header.module.css';
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

const Header = ({ loggedIn }) => {
  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>My news</div>
        </div>
        <div className={styles.center}>
          <nav className={styles.navLinks}>
            <a href={Path.Home} className={styles.link}>Home</a>
            <Link to={Path.AddNews} className={styles.link}>Add News</Link>
            <Link to={Path.ListNews} className={styles.link}>All News</Link>
          </nav>
        </div>
        <div className={styles.right}>
          {isAuthenticated ? (
            <Link to={Path.Logout} className={styles.logout}>Logout</Link>
          ) : (
            <>
              <Link to={Path.Login} className={styles.login}>Login</Link>
              <Link to={Path.Register} className={styles.register}>Register</Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
