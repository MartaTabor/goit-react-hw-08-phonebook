import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="test" name="name" placeholder="Name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="email" required />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};