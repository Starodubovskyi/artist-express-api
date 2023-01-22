const httpStatus = require('http-status');
const mongoose = require('mongoose');
const { Pages, Menu } = require('../models');
const ApiError = require('../utils/ApiError');
const SearchOptions = require('../middlewares/pagination');

/**
 * Create a pages
 * @param {Object} pagesBody
 * @returns {Promise<Pages>}
 */
const createPages = async (pagesBody) => {
  return Pages.create(pagesBody);
};

/**
 * Get All Pages
 * @param Request req
 * @returns {Promise<Pages>}
 */
const getPages = async (req) => {
  return Pages.find({}, { public: 1, title: 1, tags: 1 }, new SearchOptions(req.query));
};

/**
 * Get page by id
 * @param {ObjectId} id
 * @returns {Promise<Menu>}
 */
const getPagesById = async (id) => {
  const _id = mongoose.Types.ObjectId(id);
  return Pages.findOne({ _id });
};

/**
 * Update page by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Page>}
 */
const updatePageById = async (id, updateBody) => {
  const page = await getPagesById(id);
  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }

  Object.assign(page, updateBody);
  await page.save();
  return page;
};

/**
 * Delete page by id
 * @param {ObjectId} pageId
 * @returns {Promise<Pages>}
 */
const deletePagesById = async (pageId) => {
  const id = mongoose.Types.ObjectId(pageId);
  const page = await getPagesById(id);

  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found');
  }
  await page.deleteOne({ _id: id });
  return page;
};

const getPagesTags = async () => {
  const pagesAll = await Pages.find();
  const itemPages = pagesAll.map((pagesField) => {
    return pagesField.tags.map((pagesTags) => {
      return pagesTags.name;
    });
  });

  return itemPages.reduce((result, currentTag) => {
    return [...new Set(result), ...currentTag];
  }, []);
};

module.exports = {
  createPages,
  getPages,
  getPagesById,
  updatePageById,
  deletePagesById,
  getPagesTags,
};
