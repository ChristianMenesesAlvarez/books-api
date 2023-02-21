import { useEffect, useState, useContext } from 'react';
import { BookSection } from './BookSection';
import { GlobalContext } from '../context/GlobalState';

export function Catalog(props) {
  const [books, setBooks] = useState([]);
  const { theme } = useContext(GlobalContext);
  const { request } = props;

  useEffect(() => {
    async function fetchData() {
      const res = await request();
      setBooks(res.results.lists)
    }
    fetchData();
  }, [])

  return (
    <div className={`catalog ${theme}`}>
      <h1 className={`catalog-title ${theme}`}>TOP 5 CURRENT BEST SELLERS BY CATEGORY</h1>
      {books.sort().map(i => <BookSection key={i.list_name_encoded}>{i}</BookSection>)}
    </div>
  )
}