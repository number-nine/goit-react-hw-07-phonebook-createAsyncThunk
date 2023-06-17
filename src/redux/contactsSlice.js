import { createSlice } from '@reduxjs/toolkit';

import  * as contactsAPI from './contactOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};



export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsAPI.getAllContacts.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsAPI.getAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [contactsAPI.getAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsAPI.deleteContactById.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsAPI.deleteContactById.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [contactsAPI.deleteContactById.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [contactsAPI.addContact.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [contactsAPI.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [contactsAPI.addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export default contactsSlice.reducer;
