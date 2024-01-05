import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    getFilterValue: (state, action) => {
      state.filter = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    dellContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { getFilterValue, addContact, dellContact } =
  contactsSlice.actions;
