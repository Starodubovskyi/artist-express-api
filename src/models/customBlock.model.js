const mongoose = require('mongoose');

const customBlockSchema = mongoose.Schema(
  {
    config: {},
    name: { type: String, default: '' },
  },
  { versionKey: false }
);

/**
 * @typedef Menu
 */
const CustomBlock = mongoose.model('CustomBlock', customBlockSchema);

module.exports = CustomBlock;
