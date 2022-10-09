import React from 'react';
import { render } from '@testing-library/react';
import { BasicSharedHeader } from './shared-header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSharedHeader />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
