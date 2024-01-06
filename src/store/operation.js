import axios from 'axios';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchingError,
  fetchingInProgres,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL = 'https://659845d7668d248edf2460f2.mockapi.io';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgres());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
export const addContact = contact => async dispatch => {
  try {
    dispatch(fetchingInProgres());
    const response = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
export const deleteContact = contactId => async dispatch => {
  try {
    dispatch(fetchingInProgres());
    const response = await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(response.data.id));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
