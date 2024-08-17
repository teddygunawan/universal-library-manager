import type { ErrorRequestHandler } from 'express';
import env from '@/config/index';

const errorMiddleware: ErrorRequestHandler = function (error, req, res, next) {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  const errors = error.errors;
  res
    .status(status)
    .json({ message: message, errors: (env.NODE_ENV = 'DEVELOPMENT') });
};

export default errorMiddleware;
