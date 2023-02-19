import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { SearchBar } from '../components/SearchBar';

export function Header() {
  const { theme, changeTheme } = useContext(GlobalContext);

  return (
    <div className={`banner-wrapper ${theme}`}>
      <button onClick={() => changeTheme()}>THEME</button>
      <MainBar>
        <span>LOGO</span>
        <SearchBar />
        <span>LOGIN</span>
      </MainBar>
      <NavBar>
        <NavButton to='/front'>Hola</NavButton>
        <NavButton to='/front'>Hola</NavButton>
        <NavButton to='/front'>Hola</NavButton>
        <NavButton to='/front'>Hola</NavButton>
      </NavBar>
    </div>
  )
}

function MainBar(props) {
  const { theme } = useContext(GlobalContext);
  const { children } = props;

  return (
    <header className={`${theme}`}>
      {children}
    </header>
  )
}

function NavButton(props) {
  const { theme } = useContext(GlobalContext);
  const navigate = useNavigate();
  const { to, children } = props;

  return (
    <button className={`${theme}`} onClick={() => navigate(to)}>
      {children}
    </button>
  )
}

function NavBar(props) {
  const { theme } = useContext(GlobalContext);
  const { children } = props;

  return (
    <nav className={`${theme}`}>
      {children}
    </nav>
  )
}