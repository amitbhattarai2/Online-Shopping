const proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(proxy('/*', { target: 'http://onlineshoppingappn.herokuapp.com' }))
}
