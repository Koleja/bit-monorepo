import { PageLink, PagelinkUI } from '@my-org/wiki.common';
import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import { Header } from './header';

const testPages: PageLink[] = [
  { title: 'test1', route: '/' },
  { title: 'test2', route: '/test' },
];

const testPagesUI: PagelinkUI[] = [
  {
    component: <p className="header__link">Home</p>,
  },
  {
    component: <p className="header__link">About</p>,
  },
  {
    component: <p className="header__link">Contact</p>,
  },
];

export const BasicHeader = () => {
  return (
    <MemoryRouter>
      <Header pages={testPages} pagesElements={testPagesUI} />
    </MemoryRouter>
  );
};
