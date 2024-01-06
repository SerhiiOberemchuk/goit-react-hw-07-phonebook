import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/operation';
import { getContacts, getStatusFilter } from 'store/selectors';

export const ContactsList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => () => {
    dispatch(deleteContact(id));
  };

  const arreyContactsFiltered = items.filter(({ name }) =>
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
            onClick={handleDeleteContact(id)}
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
