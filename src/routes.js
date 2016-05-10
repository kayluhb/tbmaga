import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import Route from 'react-router/lib/Route';

import {
    About,
    App,
    Contact,
    NotFound,
    Place,
  } from './containers';

export default function routes() {
  return (
    <Route component={App} path="/">
      <IndexRoute component={Place} />
      <Route component={About} path="about" />
      <Route component={Contact} path="contact" />
      <Route component={Place} path="places/:slug" />
      <Route component={NotFound} path="*" status={404} />
    </Route>
  );
}
