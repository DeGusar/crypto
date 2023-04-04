import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CryptoState = {
  theme: string;
};

const initialState: CryptoState = {
  theme: 'dark',
};

export const cryptoSlice = createSlice({
  name: 'cryptoSlice',
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
});

export default cryptoSlice.reducer;

export const { switchTheme } = cryptoSlice.actions;
