import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type LinkButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  title: string;
  route: string;
};

export function LinkButton({ title, route }: LinkButtonProps) {
  return (
    <Link className="header__link" to={route}>
      {title}
    </Link>
  );
}
