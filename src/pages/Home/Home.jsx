import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1>Welcome to The Phonebook</h1>
      <p className={css.one}>The best user firendly online based phonebook</p>
      <p>Please register or log in to start</p>
    </div>
  );
};

export default Home;
