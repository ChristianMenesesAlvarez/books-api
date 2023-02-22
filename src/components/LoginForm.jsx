import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate, Link } from 'react-router-dom';

export function LoginForm() {
  const navigate = useNavigate();
  const { theme } = useContext(GlobalContext);
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const userData = Object.fromEntries(data);
    console.log(userData);
  }

  return (
    <>
    <div className={`dropdown-button ${theme}`} onClick={() => handleOpen()}></div>
    {open ?
    <form onSubmit={handleSubmit} className={`login-form ${theme}`}>
      <div className={`form-title`}>Login</div>
      <input placeholder='Username' name='username' type='text' />
      <input placeholder='Password' name='password' type='password' />
      <button type='submit' className='form-button'>Acceder</button>
      <span>Not a member? <Link to='/register'>Sign up</Link></span>
    </form>
    : null}
    </>
  )
}