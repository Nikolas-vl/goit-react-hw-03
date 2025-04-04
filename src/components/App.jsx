import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contacts from '../data/contacts.json';
import { useState } from 'react';
const App = () => {
  const [allContacts, setAllContacts] = useState(contacts);
  const [filter, setFilter] = useState('');

  const foundContacts = allContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={foundContacts} />
    </div>
  );
};

export default App;
