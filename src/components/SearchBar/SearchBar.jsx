import css from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <label className={css.label} htmlFor="searchField">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="searchField"
        type="text"
        name="filter"
        onChange={handleSearch}
        placeholder="Search by name"
      />
    </div>
  );
};
