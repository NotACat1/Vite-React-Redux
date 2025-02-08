import { fetchUser, logout } from './userSlice';
import userReducer from './userSlice';

describe('userSlice', () => {
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: '' })).toEqual({
      name: '',
      email: '',
      loading: false,
      error: null,
    });
  });

  it('should handle logout', () => {
    const state = { name: 'John', email: 'john@example.com', loading: false, error: null };
    expect(userReducer(state, logout())).toEqual({
      name: '',
      email: '',
      loading: false,
      error: null,
    });
  });

  it('should handle fetchUser.pending', () => {
    const action = { type: fetchUser.pending.type };
    const state = userReducer(undefined, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchUser.fulfilled', () => {
    const action = {
      type: fetchUser.fulfilled.type,
      payload: { name: 'John', email: 'john@example.com' },
    };
    const state = userReducer(undefined, action);
    expect(state.loading).toBe(false);
    expect(state.name).toBe('John');
    expect(state.email).toBe('john@example.com');
  });

  it('should handle fetchUser.rejected', () => {
    const action = { type: fetchUser.rejected.type, payload: 'Error fetching user' };
    const state = userReducer(undefined, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error fetching user');
  });
});
