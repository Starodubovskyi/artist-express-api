const mongoose = require('mongoose');

const menuSchema = mongoose.Schema(
  {
    slug: { type: String, default: '' },
    label: { type: String, default: '' },
    pages: [],
    order: { type: Number },
  },
  { versionKey: false },
  { collection: 'menus' }
);

/**
 * @typedef Menu
 */
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
