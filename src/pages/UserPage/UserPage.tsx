import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, logout } from '@store/slices/userSlice';
import { RootState, AppDispatch } from '@store/index';
import styles from './UserPage.module.scss';

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { name, email, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    document.title = 'User Page';
  }, []);

  return (
    <div className={styles.container}>
      <h2>User Info</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {name ? (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <button className="btn btn-danger" onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn btn-success" onClick={() => dispatch(fetchUser(1))}>
          Fetch User
        </button>
      )}
    </div>
  );
};

export default UserPage;
