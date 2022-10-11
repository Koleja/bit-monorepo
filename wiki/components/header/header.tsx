import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageLink, PagelinkUI } from '@my-org/wiki.common';
import './styles.scss';

export type HeaderProps = {
  pages: PageLink[];
  pagesElements?: PagelinkUI[];
};

export function Header({ pages, pagesElements }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__link">
        <p>LOGO</p>
      </div>
      <div className="header__subpages">
        {pages?.map((page: PageLink) => (
          <Link className="header__link" to={page.route} key={page.title}>
            {page.title}
          </Link>
        ))}
      </div>
      {/*  <div className="header__subpages">
        {pagesElements?.map((pageElement: PagelinkUI) => pageElement.component)}
      </div> */}
    </div>
  );
}
