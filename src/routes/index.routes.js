/* eslint-disable linebreak-style */
const express = require('express');
const reportRouter = require('./report.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const auth = require('../middleware/auth.midleware');

const app = express();

app.use(express.json());

app.use('/auth', authRouter);

app.use('/user', auth, userRouter);

app.use('/', auth, reportRouter);

module.exports = app;
