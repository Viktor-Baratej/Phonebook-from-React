import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectQuery = (state) => state.contacts.query || "";

// ✅ Оптимізований селектор для фільтрації контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    if (!query) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  }
);
