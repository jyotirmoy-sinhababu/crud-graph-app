// src/features/todos/todosSlice.js

import { createSlice } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: {} },
  reducers: {
    addContact: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addContact } = ContactSlice.actions;
export default ContactSlice.reducer;
