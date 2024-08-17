import express from 'express';
import config from './config';
import createError from 'http-errors';

import errorMiddleware from './middleware/error';

const app = express();

app.use((req, res, next) => {
  throw createError(401, 'Please login to view this page.');
  // res.send(req);
  // next();
});

app.use(errorMiddleware);

app.listen(config.PORT, (...params) => {
  console.log('Server Started at Port', process.env.PORT);
});
