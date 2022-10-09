import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '@my-org/wiki.components.header';
import { PageLink } from '@my-org/wiki.common';

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
  return (
    <>
      {/* header component */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header pages={pages} />
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
