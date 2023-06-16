import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648c0cd78620b8bae7ec20f0.mockapi.io';
// const fetchContacts = () => async dispatch => {
//   try {
//     const response = await axios.get('/contacts');
//   } catch (e) {}
// };

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  'contacts/deleteById',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

