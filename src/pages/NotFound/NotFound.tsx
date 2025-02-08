import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Страница не найдена - MyApp';
  }, []);

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
