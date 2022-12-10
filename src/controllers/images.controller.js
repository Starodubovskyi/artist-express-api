const { Images } = require('../models');
const catchAsync = require('../utils/catchAsync');

/**
 * Upload a image
 */
const uploadImageDb = catchAsync(async (req, res) => {
  const { path, filename } = req.file;
  const images = await Images.create({ path, name: filename });

  if (req.file) {
    res.send(images);
  } else {
    res.status(400).send('Please upload a valid image');
  }
});

/**
 * get by name  image
 */
const getByNameImage = catchAsync(async (req, res) => {
  res.sendFile(`${req.params.name}`, { root: `src/images/` });
});

module.exports = {
  uploadImageDb,
  getByNameImage,
};
