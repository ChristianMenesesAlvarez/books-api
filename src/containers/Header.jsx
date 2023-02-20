import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SearchBar } from '../components/SearchBar';
import { NavBar, NavButton } from '../components/NavBar';

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
        <NavButton to='/front'>First</NavButton>
        <NavButton to='/'>Second</NavButton>
        <NavButton to='/'>Third</NavButton>
        <NavButton to='/'>Fourth</NavButton>
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