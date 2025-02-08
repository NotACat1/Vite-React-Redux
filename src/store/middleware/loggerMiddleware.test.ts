import { MiddlewareAPI } from '@reduxjs/toolkit';
import loggerMiddleware from './loggerMiddleware';
import { vi } from 'vitest';

describe('loggerMiddleware', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;
  let store: MiddlewareAPI;
  let next: ReturnType<typeof vi.fn>;
  let action: { type: string };

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    store = { getState: vi.fn(() => ({ counter: { value: 5 } })) } as unknown as MiddlewareAPI;
    next = vi.fn();
    action = { type: 'TEST_ACTION' };
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs action and state', () => {
    loggerMiddleware(store)(next)(action);
    expect(consoleSpy).toHaveBeenCalledWith('🚀 Dispatching:', action);
    expect(consoleSpy).toHaveBeenCalledWith('📊 New State:', { counter: { value: 5 } });
    expect(next).toHaveBeenCalledWith(action);
  });
});
