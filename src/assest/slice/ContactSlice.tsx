// src/features/todos/todosSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface contact {
  id: number;
  firstName: string;
  secondName: string;
}

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action: PayloadAction<contact>) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = ContactSlice.actions;
export default ContactSlice.reducer;
