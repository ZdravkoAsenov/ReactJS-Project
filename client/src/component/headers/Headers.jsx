import styles from './Header.module.css'; 

const Header = ({ loggedIn }) => {
    return (
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>My news</div>
        </div>
        <div className={styles.center}>
          <nav className={styles.navLinks}>
            <a href="/" className={styles.link}>Home</a>
            <a href="/add-news" className={styles.link}>Add News</a>
            <a href="/all-news" className={styles.link}>All News</a>
            {/* Add more links as needed */}
          </nav>
        </div>
        <div className={styles.right}>
          {loggedIn ? (
            <button className={styles.logout}>Logout</button>
          ) : (
            <>
              <button className={styles.login}>Login</button>
              <button className={styles.register}>Register</button>
            </>
          )}
        </div>
      </header>
    );
  };
  
  export default Header;
