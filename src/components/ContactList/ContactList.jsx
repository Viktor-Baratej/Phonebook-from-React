import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (contactId) => {
    if (!contactId) {
      console.error("ID is undefined");
      return;
    }
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={s.contact_content}>
      <ul className={s.contact_list}>
        {filteredContacts.map((contact) => (
          <li className={s.contact_item} key={contact.id}>
            {contact.name}: <br />
            {contact.number}
            <button
              className={s.contact_btn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
