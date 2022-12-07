const express = require('express');
const imagesSerivice = require('../../services/images.service');
const imageController = require('../../controllers/images.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('', imagesSerivice.upload.single('image'), (req, res) => {
  imageController.uploadImageDb(req, res);
});

router.get('/:name', imageController.getByNameImage);

module.exports = router;
