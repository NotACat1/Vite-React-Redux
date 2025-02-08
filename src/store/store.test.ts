import store, { RootState } from './store';
import { increment, decrement, setValue } from './slices/counterSlice';
import { fetchUser, logout } from './slices/userSlice';

describe('Redux Store', () => {
  it('should initialize with correct state', () => {
    const state = store.getState() as RootState;
    expect(state.counter.value).toBe(0);
    expect(state.user.name).toBe('');
  });

  it('should handle counter actions', () => {
    store.dispatch(increment());
    expect(store.getState().counter.value).toBe(1);

    store.dispatch(decrement());
    expect(store.getState().counter.value).toBe(0);

    store.dispatch(setValue(100));
    expect(store.getState().counter.value).toBe(100);
  });

  it('should handle user actions', async () => {
    store.dispatch(logout());
    expect(store.getState().user.name).toBe('');

    await store.dispatch(fetchUser(1));
    expect(store.getState().user.name).not.toBe('');
  });
});
