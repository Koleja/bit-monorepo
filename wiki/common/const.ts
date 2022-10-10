import { ReactNode } from 'react';

export interface PageLink {
  title: string;
  route: string;
}

export interface PagelinkUI {
  component: ReactNode;
}
