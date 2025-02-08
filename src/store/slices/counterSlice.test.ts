import counterReducer, { increment, decrement, setValue } from './counterSlice';

describe('counterSlice', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: '' })).toEqual({ value: 0 });
  });

  it('should increment the counter', () => {
    const state = { value: 0 };
    expect(counterReducer(state, increment())).toEqual({ value: 1 });
  });

  it('should decrement the counter', () => {
    const state = { value: 2 };
    expect(counterReducer(state, decrement())).toEqual({ value: 1 });
  });

  it('should set the counter value', () => {
    const state = { value: 0 };
    expect(counterReducer(state, setValue(10))).toEqual({ value: 10 });
  });
});
