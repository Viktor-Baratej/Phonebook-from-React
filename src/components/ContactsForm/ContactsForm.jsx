import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import React from "react";
import s from "./ContactsForm.module.css";

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
          <span className={s.input_title}>Name:</span>
          <input
            className={s.input}
            name="name"
            placeholder="Enter contact name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <span className={s.input_title}>Number:</span>
          <input
            className={s.input}
            name="phone"
            placeholder="Enter contact phone number"
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
