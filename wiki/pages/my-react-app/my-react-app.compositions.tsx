import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MyReactAppApp } from './app';

export const MyReactAppBasic = () => {
  return (
    <MemoryRouter>
      <MyReactAppApp />
    </MemoryRouter>
  );
};
