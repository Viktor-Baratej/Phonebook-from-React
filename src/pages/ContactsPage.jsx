import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  if (isLoading) {
    return (
      <div>
        <h1>Contacts</h1>
        <p>Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Contacts</h1>
        <p>Error fetching contacts: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Contacts</h1>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactsPage;
