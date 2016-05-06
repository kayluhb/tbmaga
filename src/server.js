/**
 * THIS IS THE ENTRY POINT FOR THE SERVER.
 */
import compression from 'compression';
import createHistory from 'react-router/lib/createMemoryHistory';
import Express from 'express';
import http from 'http';
import path from 'path';
import PrettyError from 'pretty-error';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import config from './config';
import createStore from './redux/create';
import Html from './helpers/Html';
import routes from './routes';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);

app.use(compression());
app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  const history = createHistory(req.originalUrl);
  const store = createStore(history);

  function hydrateOnClient() {
    const html = ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />);
    res.send(`<!doctype html>\n${html}`);
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: routes(), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (renderProps) {
      const component = (
        <Provider store={store} key="provider">
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.status(200);

      global.navigator = { userAgent: req.headers['user-agent'] };

      res.send(`<!doctype html>\n${ReactDOM.renderToString(
        <Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />
      )}`);
    } else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
