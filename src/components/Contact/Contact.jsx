import s from './Contact.module.css';
import { FaUserLarge } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
const Contact = ({ id, name, number }) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <div className={s.item}>
          <FaUserLarge />
          <p>{name}</p>
        </div>
        <div className={s.item}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn}>Delete</button>
    </div>
  );
};

export default Contact;
