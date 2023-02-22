import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function Layout() {
  const { theme } = useContext(GlobalContext);
  const { children } = props;

  return (
    <div className={`main-wrapper ${theme}`}>
      {children}
    </div>
  )
}

