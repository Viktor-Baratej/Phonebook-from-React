import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import React from "react";
import s from "./ContactsForm.module.css";

// const ContactsForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const form = event.target;
//     const name = form.elements.name?.value;
//     const number = form.elements.number?.value;

//     if (!name || !number) {
//       console.error("Both name and number are required!");
//       return;
//     }

//     const newContact = { name, number };
//     dispatch(addContact(newContact));
//     form.reset();
//   };

const ContactsForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !number.trim()) {
      console.error("Both name and number are required!");
      return;
    }

    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <div className={s.form_container}>
      <form className={s.form_content} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className={s.input}
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Number:
          <input
            className={s.input}
            name="phone"
            placeholder="Number"
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
