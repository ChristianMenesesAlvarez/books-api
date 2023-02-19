import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function SearchBar(props) {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`search-bar ${theme}`}>
      <input type="search" name="" id="" placeholder="Search books" />
      <button type="submit" class="searchButton"><i class="fa fa-search"></i></button>
    </div>
    
  )
}