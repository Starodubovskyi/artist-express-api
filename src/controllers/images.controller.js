const { Images } = require('../models');
const catchAsync = require('../utils/catchAsync');
/**
 * Upload a image
 */
const uploadImageDb = async (req, res) => {
  const { path, originalname } = req.file;
  const images = await Images.create({ path, name: originalname });

  if (req.file) {
    res.send(images);
  } else {
    res.status(400).send('Please upload a valid image');
  }
};

/**
 * get by name  image
 */
const getByNameImage = catchAsync(async (req, res) => {
  const image = await Images.findOne({ name: req.params.name });

  // res.write(`<img src=${image.path} ></img>`);
  res.sendFile(`${image}`);
});

module.exports = {
  uploadImageDb,
  getByNameImage,
};
