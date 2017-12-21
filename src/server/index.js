const express = require('express');
const path = require('path');
const requestId = require('request-id/express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const logger = require('./helpers/logger');

const NODE_ENV = process.env.NODE_ENV || 'UNKNOWN';
const PORT = process.env.PORT || 5000;

const app = express();

const publicPath = path.resolve(__dirname, 'dist/public/');

app.use(requestId({ paramName: 'requestId' }));
app.use(logger.winston);
app.use(logger.express);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/public', express.static(publicPath, { redirect: false }));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', false);
  res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
  next();
});

app.options('*', (req, res) => {
  res.send(200);
});

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'views/index.pug'));
});

app.post('/authenticate', (req, res) => {
  if (req.body.username === 'testuser' && req.body.password === 'pass') {
    return res.send({ status: 'authenticated', statusCode: 200 });
  }
  return res.send({ status: 'failed', statusCode: 503 });
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }
  console.info(`==> 🌎 App Listening on ${PORT} please open your browser and navigate to http://localhost:${PORT}/`);
  console.info(`==> 🌎 Running ${NODE_ENV} server`);
});
