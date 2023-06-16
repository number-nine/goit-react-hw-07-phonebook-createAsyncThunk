export const addReducer = (state, action) => {
  state.push(action.payload);
};

export const removeReducer = (state, action) =>
  state.filter(contact => contact.id !== action.payload);
