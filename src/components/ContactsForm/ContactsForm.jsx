import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import React from "react";
import s from "./ContactsForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name?.value.trim();
    const phone = form.elements.phone?.value.trim();

    if (!name || !phone) {
      alert("Both name and phone are required!");
      return;
    }

    const newContact = { name, phone };
    dispatch(addContact(newContact));
    form.reset();
  };
  return (
    <form className={s.form_container} onSubmit={handleSubmit}>
      <input className={s.input} name="name" placeholder="Name" required />
      <input className={s.input} name="phone" placeholder="Number" required />
      <button className={s.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
