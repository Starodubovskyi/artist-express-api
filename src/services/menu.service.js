const httpStatus = require('http-status');
// eslint-disable-next-line import/no-extraneous-dependencies
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const axios = require('axios');
const { Menu, Pages } = require('../models');
const ApiError = require('../utils/ApiError');
const SearchOptions = require('../middlewares/pagination');
const { getThemeSettings, updateTheme } = require('./themeSetting.service');

/**
 * Create a menu
 * @param {Object} menuBody
 * @returns {Promise<Menu>>}
 */
const createMenu = async (menuBody) => {
  // TODO: add validation...
  const menu = await Menu.create(menuBody);

  const theme = await getThemeSettings();

  const mainMenu = [...theme.mainMenu];

  await updateTheme({
    ...theme,
    mainMenu: mainMenu.reduce((acc, currentRootItem) => {
      // TODO: move Operas to ENV as MENU_ROOT_ITEM
      if (!currentRootItem.id || currentRootItem.id !== 'Operas') {
        return [...acc, currentRootItem];
      }

      return [
        ...acc,
        {
          ...currentRootItem,
          children: [
            ...currentRootItem.children,
            {
              children: [],
              parentId: null,
              id: menu._id.toString(),
              label: menu.label,
              slug: menu.slug,
            },
          ],
        },
      ];
    }, []),
  });

  return menu;
};

/**
 * Get All Menu
 * @returns {Promise<Menu>}
 */
const getMenu = async (req) => {
  return Menu.find({}, null, new SearchOptions(req.query));
};

/**
 * Get menu by id
 * @param {ObjectId} id
 * @returns {Promise<Menu>}
 */
const getMenuById = async (id) => {
  const _id = mongoose.Types.ObjectId(id);
  return Menu.findOne({ _id });
};

/**
 * Update menu by id
 * @param {ObjectId} id
 * @param {Object} updateBody
 * @returns {Promise<Menu>}
 */
const updateMenuById = async (id, updateBody) => {
  const menu = await getMenuById(id);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }

  Object.assign(menu, updateBody);
  await menu.save();

  const theme = await getThemeSettings();

  const mainMenu = [...theme.mainMenu];

  await updateTheme({
    ...theme,
    mainMenu: mainMenu.reduce((acc, currentRootItem) => {
      // TODO: move Operas to ENV as MENU_ROOT_ITEM
      if (!currentRootItem.id || currentRootItem.id !== 'Operas') {
        return [...acc, currentRootItem];
      }

      return [
        ...acc,
        {
          ...currentRootItem,
          children: currentRootItem.children.map((child) => {
            if (child.id.toString() !== menu._id.toString()) {
              return child;
            }

            return {
              ...child,
              slug: menu.slug,
              label: menu.label,
            };
          }),
        },
      ];
    }, []),
  });

  return menu;
};

/**
 * Delete menu by id
 * @param {ObjectId} menuId
 * @returns {Promise<Menu>}
 */
const deleteMenuById = async (menuId) => {
  const id = new ObjectId(menuId);
  const menu = await getMenuById(id);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  await menu.deleteOne({ _id: id, isSystem: false });

  const theme = await getThemeSettings();

  const mainMenu = [...theme.mainMenu];

  await updateTheme({
    ...theme,
    mainMenu: mainMenu.reduce((acc, currentRootItem) => {
      // TODO: move Operas to ENV as MENU_ROOT_ITEM
      if (!currentRootItem.id || currentRootItem.id !== 'Operas') {
        return [...acc, currentRootItem];
      }

      return [
        ...acc,
        {
          ...currentRootItem,
          children: currentRootItem.children.filter((child) => child.id.toString() !== menu._id.toString()),
        },
      ];
    }, []),
  });

  return menu;
};

/**
 * Get menu by slug
 * @param {Response} res
 * @param {Request} req
 * @returns {Promise<Menu>}
 */
const getMenuItemBySlug = async (res, req) => {
  const menuItem = await Menu.findOne({ slug: req.query.slug, public: true });

  if (!menuItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Slug not found');
  }

  if (menuItem.isSystem) {
    const itemPages = menuItem.pages.map((page) => new ObjectId(page));

    const pages = await Pages.find({
      _id: {
        $in: itemPages,
      },
    });

    const blocks = pages.reduce((result, currentPage) => {
      return [...result, ...currentPage.blocks];
    }, []);

    return { blocks };
  }

  const response = await axios.get(
    `https://mtalegacy.alloy.it/legacy/rest-api/v1/artwork/list/${process.env.ACCOUNT_ID}/${menuItem.mtaCode}`
  );

  return response.data;
};

/**
 * Get menu by isSystem
 * @returns {Promise<Menu>}
 */
const getMenuItemByIsSystem = async () => {
  const menuItem = await Menu.find({ isSystem: false, public: true });

  return menuItem.map(({ slug, label, image }) => ({ slug, label, image }));
};

module.exports = {
  createMenu,
  getMenu,
  getMenuById,
  updateMenuById,
  deleteMenuById,
  getMenuItemBySlug,
  getMenuItemByIsSystem,
};
