import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { TestPageApp } from './app';

export const TestPageBasic = () => {
  return (
    <MemoryRouter>
      <TestPageApp />
    </MemoryRouter>
  );
};
