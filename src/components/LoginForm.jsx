import { useNavigate } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();
  const theme = 'theme-light';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data);
    console.log(userData);
  }

  return (
    <form onSubmit={handleSubmit} className={`popup ${theme}`}>
      <div>Login</div>
      <input placeholder='Username' name='username' type='text'/>
      <input placeholder='Password' name='password' type='password'/>
      <button type='submit' className='form-button'>Acceder</button>
      <span>Not a member? Sign up</span>
    </form>
  )
}