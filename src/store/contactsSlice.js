import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  reducers: {
    fetchingInProgres(state) {
      state.contacts.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
      state.contacts.error = null;
    },
    fetchingError(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    addContactSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    deleteContactSuccess(state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    getFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const {
  fetchingInProgres,
  fetchingSuccess,
  fetchingError,
  addContactSuccess,
  deleteContactSuccess,
  getFilterValue,
} = contactsSlice.actions;
