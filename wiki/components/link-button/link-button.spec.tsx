import React from 'react';
import { render } from '@testing-library/react';
import { BasicLinkButton, testProps } from './link-button.composition';
it('should render with the correct text', () => {
  const { getByText } = render(<BasicLinkButton />);
  const rendered = getByText(testProps.title);
  expect(rendered).toBeTruthy();
});
