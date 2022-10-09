import { ReactAppOptions } from '@teambit/react';

export const TestPageApp: ReactAppOptions = {
  name: 'test-page',
  entry: [require.resolve('./test-page.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default TestPageApp;
