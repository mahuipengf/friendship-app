const _ = require('lodash');
const router = require('express').Router();



const defaultRouter = [
    {
        path: '/auth',
        route: require('./auth')
    }
];

_.map(defaultRouter, (route) => {
  const middleware = _.get(route, 'middleware', []);
  router.use(route.path, ...middleware, route.route);
});


router.all('*', (req) => {
    throw new Error(`暂不支持此接口 /api${req.path}`);
});

module.exports = router;
