import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store'; // Assuming you have a store setup
import  {User} from '../types/types'
// Define the interface for the user state
interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Define your async thunk to fetch user data
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  // Simulate an API call (replace this with your actual API call)
  const response = await fetch(`http://localhost:3001/api/users/all`);
  const userData = await response.json()
  return userData;
});

// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Other synchronous reducers can go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

// Export the reducer and actions
export default userSlice.reducer;

// Selectors
export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
