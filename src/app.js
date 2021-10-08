const express = require('express');
const app = express();
const routers = require('./routers');

app.use(express.json());

app.use('/', routers);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;