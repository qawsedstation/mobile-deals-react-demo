import Express from 'express';
import http from 'http';
import path from 'path';
import bunyan from 'bunyan';

const app = new Express();
const server = new http.Server(app);

const port = 3000;
const publicPath = __dirname + '/../dist/';
const logger = bunyan.createLogger({ name: 'demo.app' });
const historyApiFallback = require('connect-history-api-fallback');

app.use(function(req, res, next) {
  req.log = logger;
  next();
});

const isDev = process.env.NODE_ENV == 'development';

app.use(historyApiFallback({
  verbose: false
}));

app.use('/', Express.static(__dirname + '/../static/'));

if (isDev) {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack/config.js');
  const compiler = webpack(webpackConfig);


  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      colors: true
    }
  }));


  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
} else {
  app.use(Express.static(publicPath));



  app.get(/.*!/,  function(request, response, next) {
    response.sendFile(path.resolve(publicPath + 'index.html'));
  });

}


server.listen(port, (error) => {
  if (error) {
    return logger.error(error);
  }
  let host = server.address().address;
  if (host === '::') host = '0.0.0.0';

  return logger.info('Server is listening on http://%s:%s', host, port);
});
