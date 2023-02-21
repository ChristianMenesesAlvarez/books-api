import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { BookItem } from './BookItem';

export function BookSection(props) {
  const { children } = props;
  const { theme } = useContext(GlobalContext);
  return (
    <div className={`book-section ${theme}`}>
      <span className='section-title'>{children.display_name}</span>
      <div className='section-books'>
        {children.books.map(i => <BookItem key={i.title}>{i}</BookItem>)}
      </div>
    </div>
  )
}