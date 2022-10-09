import { PageLink } from '@my-org/wiki.common';
import React from 'react';
import { Header } from './header';

const testPages: PageLink[] = [
  { title: 'test1', route: '/' },
  { title: 'test2', route: '/test' },
];

export const BasicHeader = () => {
  return <Header pages={testPages} />;
};
