import { useSelector, useDispatch } from 'react-redux';

import { remove } from 'redux/contactsSlice';
import {
  ListWrapper,
  PrivateContact,
  SharedContact,
} from './ContactsList.styled';
import { Button } from '../common.styled';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const { isLoggedIn } = useSelector(state => state.auth);

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
      (!contact.isPrivate || isLoggedIn)
  );
  const dispatch = useDispatch();
  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, number, isPrivate }) => {
        return (
          <li key={id}>
            {name}: {number}
            {isLoggedIn &&
              (isPrivate ? (
                <PrivateContact>private</PrivateContact>
              ) : (
                <SharedContact>shared</SharedContact>
              ))}
            {isLoggedIn && (
              <Button type="button" onClick={() => dispatch(remove(id))}>
                Delete
              </Button>
            )}
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
