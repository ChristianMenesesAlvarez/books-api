import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useNavigate, useLocation } from 'react-router-dom';

export function NavBar(props) {
  const { theme } = useContext(GlobalContext);
  const { children } = props;
  
  return (
    <nav className={`nav-bar ${theme}`}>
      {children}
    </nav>
  )
}

export function NavButton(props) {
  const { to, children } = props;
  const { theme } = useContext(GlobalContext);
  const navigate = useNavigate();
  const page = useLocation().pathname;
  const isSelected = to === page ? '-selected' : '';

  return (
    <button className={`nav-button${isSelected} ${theme}`} onClick={() => navigate(to)}>
      {children}
    </button>
  )
}