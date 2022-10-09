import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageLink } from '@my-org/wiki.common';
import './styles.scss';

export type HeaderProps = {
  pages: PageLink[];
};

export function Header({ pages }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__link">
        <p>LOGO</p>
      </div>
      <div className="header__subpages">
        {pages?.map((page: PageLink) => (
          <Link className="header__link" to={page.route}>
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
