const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const SearchOptions = require('../middlewares/pagination');
const { ThemeSetting } = require('../models');

/**
 * Get First Theme
 * @returns {Promise<Theme>}
 */
const getThemeSettings = async (req) => {
  return ThemeSetting.findOne({}, null, new SearchOptions(req.query));
};

/**
 * Update Theme
 * @param {Object} updateBody
 * @returns {Promise<Theme>}
 */
const updateTheme = async (updateBody) => {
  const theme = await ThemeSetting.findOne();
  if (!theme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  Object.assign(theme, updateBody);
  await theme.save();
  return theme;
};

module.exports = {
  getThemeSettings,
  updateTheme,
};
