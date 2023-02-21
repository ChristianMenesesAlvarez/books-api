import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function MainBar(props) {
  const { theme } = useContext(GlobalContext);
  const { children } = props;

  return (
    <header className={`main-bar ${theme}`}>
      {children}
    </header>
  )
}