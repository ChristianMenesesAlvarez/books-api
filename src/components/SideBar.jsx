import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function SideBar(props) {
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
      {buttons.sort().map(i => <SideBarButton key={i[1]}>{i[0]}</SideBarButton>)}
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