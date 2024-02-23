// Import hooks useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Import action
import { deleteContact } from 'redux/contactsSlice';
// Import action
import { getContacts, getFilter } from 'redux/selectors';
// Import styled components
import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// List of contacts
export function Contacts() {
  // Removing the list of contacts from
  const contacts = useSelector(getContacts);
  //Delete the value of the filter
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // Filtered contacts
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  // View contact
  const handleContactDelete = contactID => dispatch(deleteContact(contactID));

  return (
    // List of contacts
    <ContactsListList>
      {filteredContacts.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactsListItemContainer>
            <p>{contact.name} :</p>
            <p>{contact.number}</p>
          </ContactsListItemContainer>

          {
            // Button to view contact
            <ContactsListButton
              type="button"
              name="delete"
              onClick={() => handleContactDelete(contact.id)}
            >
              Delete
            </ContactsListButton>
          }
        </ContactsListItem>
      ))}
    </ContactsListList>
  );
}
