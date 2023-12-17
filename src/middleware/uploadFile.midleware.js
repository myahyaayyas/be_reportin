/* eslint-disable linebreak-style */
// dependency multer
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');

// const { createdReport, getHistoryById } = require('../models/reportService');

const { diskStorage, filesFilter } = require('../service/report.service');

const uploadFile = multer({ storage: diskStorage, fileFilter: filesFilter, limits: 1024 * 1024 }).single('file');

// const reportIsExist = async (req, res, next) => {
// };

module.exports = uploadFile;
