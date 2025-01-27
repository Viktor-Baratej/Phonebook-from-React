import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <div className={s.item_wrapper}>
      <li className={s.contact_item}>
        <p className={s.contact_info}>
          {contact.name}: {contact.number}
        </p>
      </li>
    </div>
  );
};

export default Contact;
