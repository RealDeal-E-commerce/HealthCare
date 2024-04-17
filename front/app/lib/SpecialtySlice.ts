import { createSlice } from '@reduxjs/toolkit';

export const specialtySlice = createSlice({
  name: 'specialty',
  initialState: {
    value: '',
  },
  reducers: {
    setSpecialty: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSpecialty } = specialtySlice.actions;

export default specialtySlice.reducer;