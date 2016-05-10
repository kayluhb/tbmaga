import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
 /* eslint-disable no-underscore-dangle */
export default function Html({ assets, component, store }) {
  const appStyle = require('../containers/App/App.scss');
  const content = component ? ReactDOM.renderToString(component) : '';
  const head = Helmet.rewind();
  const styles = (
    Object.keys(assets.styles).length === 0 ?
      <style dangerouslySetInnerHTML={{ __html: appStyle._style }} /> : null
  );

  return (
    <html lang="en-us">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        {/* styles (will be present only in production with webpack extract text plugin) */}
        {Object.keys(assets.styles).map((style, key) =>
          <link href={assets.styles[style]} key={key} rel="stylesheet" />
        )}

        {/* (will be present only in development mode) */}
        {/* outputs a <style/> tag with all App.scss + it could be CurrentPage.scss. */}
        {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
        {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
        {styles}
      </head>
      <body>
        <div id="content" className="content" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: `window.initialState=${serialize(store.getState())};` }} />
        <script src={assets.javascript.main} />
        <script async defer src="//platform.instagram.com/en_US/embeds.js"></script>
      </body>
    </html>
  );
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
};
