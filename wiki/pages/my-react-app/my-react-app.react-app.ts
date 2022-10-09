import { ReactAppOptions } from '@teambit/react';

export const MyReactAppApp: ReactAppOptions = {
  name: 'my-react-app',
  entry: [require.resolve('./my-react-app.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default MyReactAppApp;
