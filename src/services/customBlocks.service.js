const httpStatus = require('http-status');
const mongoose = require('mongoose');
const ApiError = require('../utils/ApiError');
const SearchOptions = require('../middlewares/pagination');
const { CustomBlock } = require('../models');

/**
 * Create customBlock
 * @param {Object} pagesBody
 * @returns {Promise<Pages>}
 */
const createCustomBlock = async (pagesBody) => {
  return CustomBlock.create(pagesBody);
};

/**
 * Get All Pages
 * @param Request req
 * @returns {Promise<Pages>}
 */
const getCustomBlock = async () => {
  return CustomBlock.find({});
};

/**
 * Get page by id
 * @param {ObjectId} id
 * @returns {Promise<Menu>}
 */
const getCustomBlockById = async (id) => {
  const _id = mongoose.Types.ObjectId(id);
  return CustomBlock.findOne({ _id });
};

/**
 * Update page by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Page>}
 */
const updateCustomBlocksById = async (id, updateBody) => {
  const block = await getCustomBlockById(id);
  if (!block) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }

  Object.assign(block, updateBody);
  await block.save();
  return block;
};

/**
 * Delete page by id
 * @param {ObjectId} pageId
 * @returns {Promise<Pages>}
 */
const deleteCustomBlocksById = async (pageId) => {
  const id = mongoose.Types.ObjectId(pageId);
  const page = await getCustomBlockById(id);

  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }
  await page.deleteOne({ _id: id });
  return page;
};

module.exports = {
  createCustomBlock,
  getCustomBlock,
  getCustomBlockById,
  updateCustomBlocksById,
  deleteCustomBlocksById,
};
