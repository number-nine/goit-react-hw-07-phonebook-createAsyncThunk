import { createSelector } from '@reduxjs/toolkit';

// export const selectAuth = state => {
//   console.log('selectAuth');
//   return state.auth;
// };
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
const selfSelector = state => state;

export const selectAuth = createSelector([selfSelector], state => {
  console.log('selectAuth');
  return state.auth;
});

export const selectVisibleContacts = createSelector(
  [selectFilter, selectAuth, selectContacts],
  (filter, { isLoggedIn }, items) => {
    //   const filter = selectFilter(state);
    //   const { isLoggedIn } = selectAuth(state);
    //   const items = selectContacts(state);
    console.log('selectVisibleContacts');
    return items.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
        (!contact.isPrivate || isLoggedIn)
    );
  }
);
