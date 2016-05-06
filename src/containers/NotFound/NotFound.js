import Helmet from 'react-helmet';
import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  const description = '404 cannot find.';
  return (
    <main className="page page--about">
      <Helmet
        title="Not Found"
        meta={[
            { name: 'description', content: description },
            { property: 'og:description', content: description },
        ]}
      />
      <h1 className="page__title">Doh! 404</h1>
      <div className="page__content">
        <p>These are not the droids you are looking for!</p>
        <p>Sorry, but there was an error processing your request.</p>
        <p>
          This page may no longer exist, so please visit the&nbsp;
          <Link to="/">home page</Link>
          &nbsp;or try the following:
        </p>
        <ul>
          <li>If you typed the page address in the Address bar, make sure that it was spelled correctly.</li>
          <li>Open the home page and look for the links to the information you want.</li>
          <li>Click the "Back" button to try another link.</li>
        </ul>
      </div>
    </main>
  );
}
