const express = require('express');
const { getArtworkListController } = require('../../controllers');

const router = express.Router();

router.get('', getArtworkListController.getArtworkList);
router.get('/every-image/:id', getArtworkListController.getArtworkEveryImage);

module.exports = router;
