import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { LinkButton, LinkButtonProps } from './link-button';

export const testProps: LinkButtonProps = {
  title: 'Test',
  route: '/',
};

export const BasicLinkButton = () => {
  return (
    <MemoryRouter>
      <LinkButton title={testProps.title} route={testProps.route} />
    </MemoryRouter>
  );
};
