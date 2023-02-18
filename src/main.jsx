import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import './styles/theme.scss';
import { FrontPage } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
          <Route path='/front' element={<FrontPage />}></Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
)
