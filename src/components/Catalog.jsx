

export function Catalog() {


  return (
    <div className="catalog">
      <section className={`catalog-section ${theme}`}>
        <div>CATEGORIA</div>
        <BookItem/>
      </section>
    </div>
  )
}

function BookItem(props) {
  const { title, author, publisher, description, rank, book_image, buy_links, contributor, book_review_link, age_group } = props;
  return (
    <article className={`catalog-article ${theme}`}>
      <div className='article-head'>
        <span className='book-rank'>{rank}</span>
        <span className='book-title'>{title}</span>
        <span className='book-contributor'>{contributor}</span>
      </div>
      <div className='book-image'>
        <img src={book_image} alt={title} />
      </div>
      <div className='book-description'>
        {description}
      </div>
      <BookLinks>{buy_links}</BookLinks>
      <p></p>
    </article>
  )
}

function BookLinks(props) {
  const { children } = props;
  const icons = {
    'Amazon': 'fa-brands fa-amazon',
    'Apple Books': 'fa-solid fa-book-open',
  }

  return (
    <details className='book-links'>
      <summary>Buy it</summary>
      <div className='book-links'>
        {children.map(i => <a href={i.url}><i alt={i.name} className={icons[i.name]}/></a>)}
      </div>
    </details>
  )
}

/* https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Apple_Books_%28macOS%29.svg/1200px-Apple_Books_%28macOS%29.svg.png */