import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveToLocalStorage, loadFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage'; // Adjust path as needed

interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: '',
  password: '',
};

// Load initial state from localStorage
const localStorageData = loadFromLocalStorage();
const initialStateFromLocalStorage = localStorageData ? localStorageData : initialState;

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateFromLocalStorage,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      saveToLocalStorage(state); // Save to localStorage
    },
    clearUserData: (state) => {
      state.email = '';
      state.password = '';
      removeFromLocalStorage(); // Clear from localStorage
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
