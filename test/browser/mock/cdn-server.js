'use strict';

import express from 'express';

const app = express();

function corsMiddleware() {
  return (req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  };
}

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', 0);
  return next();
});

app
  .use(corsMiddleware())
  .use(express.static('dist/statics'));

const port = process.env.FAKE_SERVER_PORT || 3200;
app.listen(port);

module.exports = app;
