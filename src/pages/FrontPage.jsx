import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useLocation } from "react-router-dom";
import { LoginForm } from '../components/LoginForm';

export function FrontPage() {
  const { pathname } = useLocation();
  const { users, getUsers } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
  }, [])

  return (
      <>
        {pathname !== '/front' && <Link to='/front'>HOME</Link>}
        <LoginForm/>
      </>
  )
}