import { useSelector, useDispatch } from 'react-redux';
import * as contactsAPI from 'redux/contactOperations';
import {
  selectAuth,
  // selectIsLoading,
  // selectContacts,
  selectVisibleContacts,
} from 'redux/selectors';

// import { remove } from 'redux/contactsSlice';
import {
  ListWrapper,
  PrivateContact,
  SharedContact,
} from './ContactsList.styled';
import { Button } from '../common.styled';
// import SplashScreen from 'components/SplashScreen';


const ContactsList = () => {
  // const isLoading = useSelector(selectIsLoading);
  const { isLoggedIn } = useSelector(selectAuth);
  const visibleContacts = useSelector(selectVisibleContacts);

  // const visibleContacts = contacts.filter(
  //   contact =>
  //     contact.name.toLowerCase().includes(filter.trim().toLowerCase()) &&
  //     (!contact.isPrivate || isLoggedIn)
  // );
  const dispatch = useDispatch();
  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, phone, isPrivate }) => {
        // console.log(isPrivate);
        return (
          <li key={id}>
            {name}: {phone}
            {isLoggedIn &&
              (isPrivate ? (
                <PrivateContact>private</PrivateContact>
              ) : (
                <SharedContact>shared</SharedContact>
              ))}
            {isLoggedIn && (
              <Button
                type="button"
                onClick={() => dispatch(contactsAPI.deleteContactById(id))}
              >
                 Delete
              </Button>
            )}
            {/* {isLoading && <SplashScreen/>} */}
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
