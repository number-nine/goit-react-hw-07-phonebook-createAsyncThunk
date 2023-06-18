import { createSlice } from '@reduxjs/toolkit';

import * as contactsAPI from './contactOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const pendingFn = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedFn = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsAPI.getAllContacts.pending]: pendingFn,
    [contactsAPI.getAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [contactsAPI.getAllContacts.rejected]: rejectedFn,
    [contactsAPI.deleteContactById.pending]: pendingFn,
    [contactsAPI.deleteContactById.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [contactsAPI.deleteContactById.rejected]: rejectedFn,
    [contactsAPI.addContact.pending]: pendingFn,
    [contactsAPI.addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [contactsAPI.addContact.rejected]: rejectedFn,
  },
});

export default contactsSlice.reducer;
