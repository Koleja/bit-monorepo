import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LinkButton } from './link-button';

export const BasicLinkButton = () => {
  return (
    <MemoryRouter>
      <LinkButton title="Test" route="/" />
    </MemoryRouter>
  );
};
