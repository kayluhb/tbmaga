/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import useScroll from 'scroll-behavior/lib/useStandardScroll';
import withScroll from 'scroll-behavior';
import { browserHistory as _browserHistory, Router, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from './redux/create';
import routes from './routes';
import { menuClose, placeCloseMedia } from './redux/modules/actions';

const browserHistory = withScroll(_browserHistory);
const content = document.getElementById('content');
const store = createStore(browserHistory, window.initialState);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const inProduction = process.env.NODE_ENV === 'production';

const component = (
  <Router
    history={history}
    render={(props) =>
      <RouterContext {...props} />
    }
  >
    {routes()}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  content
);

if (!inProduction) {
  if (!content || !content.firstChild || !content.firstChild.attributes ||
      !content.firstChild.attributes['data-react-checksum']) {
    console.error(
      `Server-side React render was discarded. Make sure that your `
      `initial render does not contain any client-side code.`
    );
  }
} else {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
      a=s.createElement(o), m=s.getElementsByTagName(o)[0];
      a.async=1;
      a.src=g;
      m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-592045-7', 'auto');
  ga('send', 'pageview');
  /* eslint-enable */
}

function onHistoryChange() {
  const state = store.getState();
  if (state.menu.open) {
    store.dispatch(menuClose());
  }

  if (state.place.mediaOpen) {
    store.dispatch(placeCloseMedia());
  }

  if (inProduction) {
    window.ga('send', 'pageview');
  }
}
history.listen(onHistoryChange);

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    content
  );
}

