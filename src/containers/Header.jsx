import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SearchBar } from '../components/SearchBar';
import { NavBar, NavButton } from '../components/NavBar';
import { MainBar } from '../components/MainBar';
import { LoginForm } from '../components/LoginForm';

export function Header() {
  const { theme, changeTheme } = useContext(GlobalContext);

  return (
    <div className={`banner-wrapper ${theme}`}>
      <button onClick={() => changeTheme()}>THEME</button>
      <MainBar>
        <span>NEW YORK TIMES BEST SELLER LIST</span>
        <SearchBar />
        <LoginForm />
      </MainBar>
      <NavBar>
        <NavButton to='/front'>Current Top 5 Best Sellers</NavButton>
        <NavButton to='/all'>All Top Best Sellers</NavButton>
        <NavButton to='/categories'>Category Best Sellers</NavButton>
        <NavButton to='/aboutus'>About Us</NavButton>
      </NavBar>
    </div>
  )
}

