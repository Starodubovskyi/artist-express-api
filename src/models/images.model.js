const mongoose = require('mongoose');

const imagesSchema = mongoose.Schema(
  {
    path: { type: String, default: '' },
    name: { type: String, default: '' },
    cloudinary_id: {},
  },
  { versionKey: false }
);

/**
 * @typedef Menu
 */
const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;
