import { createSlice, nanoid } from '@reduxjs/toolkit';

import contacts from 'controllers/local-data-provider';
import { addReducer, removeReducer } from './contactsReducers';

const initialState = () =>
  contacts.map(contact => ({ ...contact, id: nanoid() }));

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
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
