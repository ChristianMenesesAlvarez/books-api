import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SearchBar } from '../components/SearchBar';
import { NavBar, NavButton } from '../components/NavBar';
import { MainBar } from '../components/MainBar';

export function Header() {
  const { theme, changeTheme } = useContext(GlobalContext);

  return (
    <div className={`banner-wrapper ${theme}`}>
      <button onClick={() => changeTheme()}>THEME</button>
      <MainBar>
        <span>NEW YORK TIMES BEST SELLER LIST</span>
        <SearchBar />
        <button>LOGIN</button>
      </MainBar>
      <NavBar>
        <NavButton to='/front'>Current Top 5 Best Sellers</NavButton>
        <NavButton to='/'>All Top Best Sellers</NavButton>
        <NavButton to='/'>Category Best Sellers</NavButton>
        <NavButton to='/'>Fourth</NavButton>
      </NavBar>
    </div>
  )
}

