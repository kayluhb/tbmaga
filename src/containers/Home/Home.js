import Helmet from 'react-helmet';
import React from 'react';

import './Home.scss';
import config from '../../config';

export default function Home() {
  return (
    <main className="page--home">
      <Helmet title={config.app.title} titleTemplate="%s" />
    </main>
  );
}
