const mongoose = require('mongoose');

const pagesSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    public: { type: Boolean, default: false },
    tags: [
      {
        name: { type: String, required: true },
        value: { type: String, default: '' },
      },
    ],
    blocks: [],
  },
  { versionKey: false },
  { collection: 'pages' }
);

/**
 * @typedef Pages
 */
const Pages = mongoose.model('Pages', pagesSchema);

module.exports = Pages;
