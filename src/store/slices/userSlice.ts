import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserApi } from '../../utils/api';

interface UserState {
  name: string;
  email: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  name: '',
  email: '',
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId: number, { rejectWithValue }) => {
    try {
      return await fetchUserApi(userId);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.name = '';
      state.email = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<{ name: string; email: string }>) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.loading = false;
        },
      )
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
