require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

const description = 'Lillian and Caleb Brown travel across America on their way to their new home in Austin.';
const title = 'The Browns Make America Great Again';

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title,
    description,
    head: {
      titleTemplate: `%s :  ${title}`,
      link: [
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes: '192x192' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
        { rel: 'stylesheet', href: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.16.0/mapbox-gl.css' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: title },
        { property: 'og:image', content: 'http://thebrownsmakeamericagreatagain.com/images/share.jpg' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@kayluhb' },
        { property: 'og:creator', content: '@kayluhb' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
        { name: 'theme-color', content: '#072d54' }
      ],
      script: [
        { src: 'https://api.tiles.mapbox.com/mapbox-gl-js/v0.16.0/mapbox-gl.js' }
      ]
    }
  },

}, environment);
