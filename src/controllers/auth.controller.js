/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/order
const { v4: uuidv4 } = require('uuid');
// const cookieSession = require('cookie-session');
const jwt = require('../utils/jwt');
const auth = require('../service/auth.service');

class authController {
  static register = async (req, res, next) => {
    try {
      const user = await auth.register(uuidv4(), req.body);
      res.status(200).send({
        status: true,
        message: 'User created successfully',
        data: user,
      });
    } catch (e) {
      next(
        res.status(500).json({
          status: 'error',
          code: 500,
          message: 'Internal Server Error',
        }),
      );
    }
  };

  static login = async (req, res, next) => {
    try {
      const data = await auth.login(req.body);
      const accessToken = await jwt.signAccessToken(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
      });
      res.status(200).send({
        status: true,
        message: 'Account login successful',
        data,
        accessToken,
      });
    } catch (e) {
      next(
        res.status(500).json({
          status: 'error',
          code: 500,
          message: 'Internal Server Error',
        }),
      );
    }
  };

  static all = async (req, res, next) => {
    try {
      const users = await auth.all();
      res.status(200).send({
        status: true,
        message: 'All users',
        data: users,
      });
    } catch (e) {
      next(
        res.status(500).json({
          status: 'error',
          code: 500,
          message: 'Internal Server Error',
        }),
      );
    }
  };

  static logout = async (req, res) => {
    try {
      // Hapus cookie access token
      res.clearCookie('accessToken');

      res.status(200).send({
        status: true,
        message: 'Logout berhasil',
      });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).send({
        status: false,
        message: 'Terjadi kesalahan saat logout',
      });
    }
  };
}
module.exports = authController;
