import { useDispatch, useSelector } from 'react-redux';
import { dellContact } from 'store/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDeleteContact = e => {
    dispatch(dellContact(e.target.id));
  };

  const arreyContactsFiltered = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className="list-group ">
      {arreyContactsFiltered.map(({ id, name, number }) => (
        <li className="list-group-item d-flex" key={id}>
          <div className="p-2">
            {name}: {number}
          </div>
          <button
            id={id}
            onClick={handleDeleteContact}
            type="button"
            className="btn btn-danger ms-auto"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
