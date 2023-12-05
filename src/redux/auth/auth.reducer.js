import { productsData } from 'Data/data';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  autenticated: false,
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
