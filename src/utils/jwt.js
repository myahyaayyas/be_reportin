/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
require('dotenv').config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'adnifuaw3br398bf892b398293h89nj';
module.exports = {
  signAccessToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, accessTokenSecret, {
      }, (err, token) => {
        if (err) {
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
  verifyAccessToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, accessTokenSecret, (err, payload) => {
        if (err) {
          console.error('Error during token verification:', err);
          console.log('Token Payload:', payload);
          const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;
          return reject(createError.Unauthorized(message));
        }
        resolve(payload);
      });
    });
  },
};
