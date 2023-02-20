import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import './styles/styles.scss';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { FrontPage } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
          <Route path='/front' element={<FrontPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
)
