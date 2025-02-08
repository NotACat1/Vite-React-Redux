import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Redux App
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/counter">
              Counter
            </Link>
            <Link className="nav-link" to="/user">
              User
            </Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
