import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selectors';
import { ContactsList } from '../components/ContactList/ContactsList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <ContactForm />
      <SearchBar />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </div>
  );
};
