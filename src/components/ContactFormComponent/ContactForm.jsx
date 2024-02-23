// Import hooks useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Import action
import { addContact } from 'redux/contactsSlice';
// Import selector
import { getContacts } from 'redux/selectors';
// Import styled components
import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
// Removing the list of contacts from
  const contacts = useSelector(getContacts);

 // Form processing
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const isInContacts = contacts.some(
      ({ name }) =>
        name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    // Checking the presence of a contact in the list
    if (isInContacts) {
      alert(`${form.elements.name.value} is already in contacts`);
      return;
    }

    //Add to contact
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <div>
        <ContactFormLabel htmlFor="name">
          Name
          <ContactFormInput
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor="number">
          Number
          <ContactFormInput
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactFormLabel>
      </div>
      <ContactFormButton type="submit">Add contact </ContactFormButton>
    </ContactFormForm>
  );
}
