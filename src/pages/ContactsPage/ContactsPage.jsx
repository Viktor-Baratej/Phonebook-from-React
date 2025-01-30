import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1 className={s.contacts_title}>Contacts</h1>
        <p className={s.contacts_title}>Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className={s.contacts_title}>Contacts</h1>
        <p className={s.contacts_title}>Error fetching contacts: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className={s.contacts_title}>Contacts</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
