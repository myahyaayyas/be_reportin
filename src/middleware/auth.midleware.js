/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
const createError = require('http-errors');
const jwt = require('../utils/jwt');

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(createError.Unauthorized('Token akses login diperlukan!!'));
  }

  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return next(createError.Unauthorized());
  }

  try {
    const user = await jwt.verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(createError.Unauthorized(error.message));
  }
};

module.exports = auth;
