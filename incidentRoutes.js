//routes/incidentRoutes.js
const express = require('express');
const router = express.Router();
const IncidentController = require('../controllers/incidentController');

router.post('/', IncidentController.reportIncident);

module.exports = router;