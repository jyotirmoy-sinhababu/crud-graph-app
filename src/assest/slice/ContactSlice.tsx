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
      state.contacts = action.payload;  
    },
    deleteContact: (state, action) => {
      const filteredState = state.contacts.filter((item) => {
        return item.id !== action.payload;
      });
      state.contacts = filteredState;
    },
  },
});

export const { addContact, deleteContact } = ContactSlice.actions;
export default ContactSlice.reducer;
