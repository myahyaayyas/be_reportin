/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user.controller');

router.get('/', UserController.getAllUser);

module.exports = router;
