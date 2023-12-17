/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

const ReportController = require('../controllers/report.controller');

const uploadFile = require('../middleware/uploadFile.midleware');

router.get('/', ReportController.getAllReport);

router.post('/:userId', uploadFile, ReportController.postReport);

router.delete('/:reportId', ReportController.deleteReport);

router.put('/:reportId', ReportController.updateAllDataReport);

router.get('/:reportId', ReportController.getHistoryByReport);

router.patch('/:reportId', ReportController.updateSingleDataReport);

router.get('/history/:userId', ReportController.getHistoryByUser);

module.exports = router;
