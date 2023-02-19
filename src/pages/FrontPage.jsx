import { Link, useLocation } from "react-router-dom";
import { Header } from '../containers/Header';
import { LoginForm } from '../components/LoginForm';
import { Layout } from '../containers/Layout';
import { Footer } from '../containers/Footer';

export function FrontPage() {
  const { pathname } = useLocation();

  return (
      <>
        {pathname !== '/front' && <Link to='/front'>HOME</Link>}
        <Header/>
        <LoginForm/>
        <Layout></Layout>
        <Footer></Footer>
      </>
  )
}