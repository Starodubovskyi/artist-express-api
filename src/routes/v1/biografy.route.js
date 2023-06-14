const express = require('express');
const { getArtistController } = require('../../controllers');

const router = express.Router();

router.get('', getArtistController.getArtist);

module.exports = router;
