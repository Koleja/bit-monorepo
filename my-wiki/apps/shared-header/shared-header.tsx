import React, { ReactNode } from 'react';

export type SharedHeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function SharedHeader({ children }: SharedHeaderProps) {
  return (
    <div>
      {children}
      <p>niach niach </p>
    </div>
  );
}
