const proxy = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    proxy('/api/*', { target: 'http://onlineshoppingappn.herokuapp.com/' })
  )
}
