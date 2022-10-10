import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from '@my-org/wiki.components.header';
import { LinkButton } from '@my-org/wiki.components.link-button';
import { PageLink, PagelinkUI } from '@my-org/wiki.common';

export function ContactApp() {
  const pages: PageLink[] = [
    {
      title: 'home',
      route: '/',
    },
    {
      title: 'about',
      route: '/about',
    },
    {
      title: 'contact',
      route: '/contact',
    },
  ];

  const pages2: PagelinkUI[] = pages.map(({ title, route }: PageLink) => {
    const obj: PagelinkUI = {
      component: <LinkButton title={title} route={route} />,
    };
    return obj;
  });

  return (
    <>
      {/* header component */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header pages={pages} pagesElements={pages2} />
              Home
            </div>
          }
        >
          {/* home page component */}
        </Route>

        <Route
          path="/about"
          element={
            <div>
              <Header pages={pages} />
              About
            </div>
          }
        ></Route>

        <Route
          path="/contact"
          element={
            <div>
              <Header pages={pages} />
              Contact
            </div>
          }
        ></Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
