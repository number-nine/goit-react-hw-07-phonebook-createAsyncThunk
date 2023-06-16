import { createSlice, nanoid } from '@reduxjs/toolkit';

import contacts from 'controllers/local-data-provider';
import { addReducer, removeReducer } from './contactsReducers';
import { getAllContacts } from './contactOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// () =>
// contacts.map(contact => ({ ...contact, id: nanoid() }));

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer: addReducer,
      prepare: contact => {
        const { name, number } = contact;
        return {
          payload: {
            ...contact,
            name: name.trim(),
            number: number.trim(),
            id: nanoid(),
          },
        };
      },
    },
    remove: removeReducer,
  },
  extraReducers: {
    [getAllContacts.pending](state, action) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getAllContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
