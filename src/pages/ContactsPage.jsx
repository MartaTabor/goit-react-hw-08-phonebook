import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from '../redux/contacts/selectors';
import { ContactsList } from '../components/ContactList/ContactsList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Your Contacts</title>
        </Helmet>
        <ContactForm />
        <SearchBar />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactsList />
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
