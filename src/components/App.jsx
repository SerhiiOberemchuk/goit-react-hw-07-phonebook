import { FormAddContacts } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div className="maine_box">
      <h1 className="h1 mt-2">Phonebook</h1>
      <FormAddContacts />
      <h2 className="h2 mt-3">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
