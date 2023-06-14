const express = require('express');
const { getExpositionController } = require('../../controllers');

const router = express.Router();

router.get('', getExpositionController.getExposition);

module.exports = router;
