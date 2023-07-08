const express = require('express');
const biographyRoute = require('./biografy.route');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const pagesRoute = require('./pages.route');
const menuRoute = require('./menu.route');
const contactRoute = require('./contact-form.route');
const themeSettings = require('./themeSettings.route');
const imagesRoute = require('./images.route');
const customBlocks = require('./customBlock.route');
const opereRoute = require('./opere.route');
const expositionRoute = require('./exposiotion.route');
const antologyRoute = require('./antologies.route');
const catalogRoute = require('./catalog.route');

const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/pages',
    route: pagesRoute,
  },
  {
    path: '/menu',
    route: menuRoute,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
  {
    path: '/theme',
    route: themeSettings,
  },
  {
    path: '/images',
    route: imagesRoute,
  },
  {
    path: '/custom-blocks',
    route: customBlocks,
  },
  {
    path: '/biography',
    route: biographyRoute,
  },
  {
    path: '/opera',
    route: opereRoute,
  },
  {
    path: '/exposition',
    route: expositionRoute,
  },
  {
    path: '/anthology',
    route: antologyRoute,
  },
  {
    path: '/catalog',
    route: catalogRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
