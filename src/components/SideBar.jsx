import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { getCategories } from '../logic/fetch.js';

export function SideBar() {
  const [buttons, setButtons] = useState([]);
  const { theme } = useContext(GlobalContext);
  const { request } = props;

  useEffect(() => {
    async function fetchData() {
      const res = await request();
      setButtons(res);
    }
    fetchData();
  }, [])

  return (
    <div className={`sidebar ${theme}`}>
      <div className={`sidebar-title  ${theme}`}>CATEGORIES</div>
      {categories.sort().map(i => <SideBarButton key={i[1]}>{i[0]}</SideBarButton>)}
    </div>
  )
}

function SideBarButton(props) {
  const { children } = props;
  const { theme } = useContext(GlobalContext);

  return (
    <button className={`sidebar-button ${theme}`} onClick={(key) => getList(key)}>{children}
    </button>
  )
}