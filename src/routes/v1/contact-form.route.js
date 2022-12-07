const express = require('express');
const { contactController } = require('../../controllers');

const router = express.Router();

// public
router.post('/send-messages', contactController.sendMessages);

module.exports = router;
