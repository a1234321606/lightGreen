const express = require('express');

const policyholderController = require('../controllers/policyholderController');

const router = express.Router();

router.get('/policyholders', policyholderController.getPolicyholders);

router.get('/policyholders/:code', policyholderController.getPolicyholder);

module.exports = router;