import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { increment, decrement, setValue } from '@store/slices/counterSlice';
import styles from './CounterPage.module.scss';

const CounterPage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    document.title = 'Counter Page';
  }, []);

  return (
    <div className={styles.counter}>
      <h2>Counter</h2>
      <p>Value: {value}</p>
      <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button className="btn btn-warning" onClick={() => dispatch(setValue(0))}>
        Reset
      </button>
    </div>
  );
};

export default CounterPage;
