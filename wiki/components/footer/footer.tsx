import React, { ReactNode } from 'react';

export type FooterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Footer({ children }: FooterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
