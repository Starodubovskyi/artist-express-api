const express = require('express');
const multer = require('multer');
const imagesSerivice = require('../../services/images.service');
const imageController = require('../../controllers/images.controller');
const auth = require('../../middlewares/auth');
const { storage } = require('../../services/images.service');

const upload = multer({ storage });

const router = express.Router();

router.post('', upload.single('image'), (req, res) => {
  imageController.uploadImageDb(req, res);
});

router.get('/:name', imageController.getByNameImage);

module.exports = router;
