import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ContactApp } from './app';

export const ContactBasic = () => {
  return (
    <MemoryRouter>
      <ContactApp />
    </MemoryRouter>
  );
};
