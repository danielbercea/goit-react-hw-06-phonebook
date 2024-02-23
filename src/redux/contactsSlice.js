import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Default contacts
const defaultContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

// Створення slice контактів за допомогою createSlice
const contactsSlice = createSlice({
  // Ім'я slice контактів
  name: 'contacts',
  // Початковий стан контактів
  initialState: defaultContacts,
  // Reducers
  reducers: {
    // Додавання нового контакту
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      // Підготовка даних для додавання з унікальним ID
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    // Видалення контакту
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

// Конфігурація персистентного сховища === localStorage
const persistConfig = {
  key: 'contactsStorage',
  storage,
};

// Експортуємо actions з contactsSlice
export const { addContact, deleteContact } = contactsSlice.actions;

// Експортуємо персистентний Reducer з конфігураціями
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
