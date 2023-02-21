import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function BookItem(props) {
  const { theme } = useContext(GlobalContext);
  const { children } = props;
  const { title, publisher, description, rank, book_image, buy_links, contributor } = children;

  return (
    <div className={`book-item ${theme}`}>
      <div className={`item-head ${theme}`}>
        <div className='rank'>{rank}</div>
        <div className='headline'>
          <span><b>{title}</b></span>
          <span>{contributor}</span>
        </div>
      </div>
      <div className={`item-body ${theme}`}>
        <img src={book_image} alt={title} />
        <details>
          <summary>Synopsis</summary>
          <span><i>{publisher}</i></span>
          <p>{description}</p>
        </details>
        <div className={`item-links ${theme}`}>
          {buy_links.map(i => <a href={i.url} target='_blank' key={i.name}>
            <img src='' alt='X'/>
          </a>)}
        </div>
      </div>
    </div>
  )
}