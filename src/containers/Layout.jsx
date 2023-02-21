import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SideBar } from '../components/SideBar';
import { Catalog } from '../components/Catalog';
import * as requestAPI from '../logic/fetch';

export function Layout() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`main-wrapper ${theme}`}>
      <SideBar/>
      <Catalog request={requestAPI.getOverview}/>
    </div>
  )
}

