import React from 'react';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <Link className="header" to="/">
        <h1 className="header__title">The Browns</h1>
        <h2 className="header__subtitle">Make America Great Again</h2>
      </Link>
    </header>
  );
}
