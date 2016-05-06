import IndexRoute from 'react-router/lib/IndexRoute';
import React from 'react';
import Route from 'react-router/lib/Route';

import {
    About,
    App,
    Contact,
    NotFound,
    Place,
    PlacePhotos
  } from './containers';

export default function routes() {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route component={App} path="/">
      { /* Home (main) route */ }
      <IndexRoute component={Place} />
      <Route component={About} path="about" />
      <Route component={Contact} path="contact" />
      <Route component={Place} path="places/:slug">
        <Route component={PlacePhotos} path="photos" />
      </Route>

      { /* Catch all route */ }
      <Route component={NotFound} path="*" status={404} />
    </Route>
  );
}
