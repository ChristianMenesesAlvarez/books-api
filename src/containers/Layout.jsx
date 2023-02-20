import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { SideBar } from '../components/SideBar';

export function Layout() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`main-wrapper ${theme}`}>
      <SideBar/>
      <main>
        <h1>HOLA</h1>
        <section className={theme}>
          <article className={theme}>
            <p className='article-title'>Hola</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus sint quisquam at incidunt sapiente. Quidem iste, unde sunt, quaerat tempore optio totam quas voluptate quod officiis, blanditiis explicabo dolores.
            </p>
            <p>Details</p>
          </article>
          <article>
            <p>Hola</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus sint quisquam at incidunt sapiente. Quidem iste, unde sunt, quaerat tempore optio totam quas voluptate quod officiis, blanditiis explicabo dolores.
            </p>
            <p>Details</p>
          </article>
          <article>
            <p>Hola</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus sint quisquam at incidunt sapiente. Quidem iste, unde sunt, quaerat tempore optio totam quas voluptate quod officiis, blanditiis explicabo dolores.
            </p>
            <details>
            <summary>Detalles</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia repellat, sapiente eius doloribus quibusdam rerum officiis corrupti ullam quis, quae alias quasi nihil ex magnam itaque, cumque sint exercitationem!</p>
            </details>
          </article>
        </section>
        <section>
          <article>
            <p>Hola</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit doloribus sint quisquam at incidunt sapiente. Quidem iste, unde sunt, quaerat tempore optio totam quas voluptate quod officiis, blanditiis explicabo dolores.
            </p>
            <p>Details</p>
          </article>
        </section>
      </main>
    </div>
  )
}

