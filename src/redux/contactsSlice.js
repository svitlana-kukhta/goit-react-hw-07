import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {items: initialContacts,},
  reducers: {addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);},
    }},
);

export const { addContact, deleteContact } = contactSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactSlice.reducer;

