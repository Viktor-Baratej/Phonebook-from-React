import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import s from "./ContactList.module.css";
import toast from "react-hot-toast";

const handleDeleteContact = async (id) => {
  try {
    await deleteContact(id);
    toast.success("Contact deleted successfully!");
  } catch (error) {
    toast.error("Failed to delete contact!");
  }
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <div className={s.contact_wraper}>
      <ul className={s.contact_list}>
        {contacts.map(({ id, name, phone }) => (
          <li className={s.contact_item} key={id}>
            {name}: {phone}
            <button className={s.contact_btn} onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
