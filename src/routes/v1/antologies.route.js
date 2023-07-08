const express = require('express');
const { getAnthologyController } = require('../../controllers');

const router = express.Router();

router.get('/list', getAnthologyController.getAnthologyList);
router.get('/get', getAnthologyController.getAnthology);

module.exports = router;
