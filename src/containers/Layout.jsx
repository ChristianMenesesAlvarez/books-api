import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SideBar } from '../components/SideBar';

export function Layout() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`main-wrapper ${theme}`}>
      <SideBar/>
      <main>
        <h1>CATEGORIA</h1>
        
      </main>
    </div>
  )
}

