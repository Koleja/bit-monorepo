import { ReactAppOptions } from '@teambit/react';

export const ContactApp: ReactAppOptions = {
  name: 'contact',
  entry: [require.resolve('./contact.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default ContactApp;
