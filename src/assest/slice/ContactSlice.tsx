// src/features/todos/todosSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
}

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] as Contact[] },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContact } = ContactSlice.actions;
export default ContactSlice.reducer;
