import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { getCategories } from '../logic/fetch.js';

export function SideBar() {
  const { theme } = useContext(GlobalContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getCategories();
      setCategories(res);
    }
    fetchData();
  }, [])

  return (
    <aside>
      <div className="categories-title">CATEGORIES</div>
      {categories.sort().map(i => <button className={`navbar-button ${theme}`} key={i[1]} onClick={() => pepe()}>{i[0]}</button>)}
    </aside>
  )
}