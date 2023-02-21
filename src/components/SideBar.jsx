import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { getCategories } from '../logic/fetch.js';

export function SideBar() {
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
      {categories.sort().map(i => <SideBarButton key={i[1]}>{i[0]}</SideBarButton>)}
    </aside>
  )
}

function SideBarButton(props) {
  const { children, key } = props;
  const { theme } = useContext(GlobalContext);

  return (
    <button className={`sidebar-button ${theme}`} key={key} onClick={(key) => getList(key)}>{children}</button>
  )
}