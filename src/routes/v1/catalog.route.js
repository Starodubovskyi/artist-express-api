const express = require('express');
const { getCatalogController } = require('../../controllers');

const router = express.Router();

router.get('/list', getCatalogController.getCatalogList);
router.get('/get', getCatalogController.getCatalog);

module.exports = router;
