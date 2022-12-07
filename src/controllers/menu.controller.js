const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { menuService } = require('../services');

const createMenu = catchAsync(async (req, res) => {
  const menu = await menuService.createMenu(req.body);
  res.status(httpStatus.CREATED).send(menu);
});

const getMenu = catchAsync(async (req, res) => {
  const getMenuService = await menuService.getMenu(req);

  if (!getMenuService) {
    res.status(500).json({ success: false });
  }
  res.send(getMenuService);
});

const getMenuById = catchAsync(async (req, res) => {
  const menu = await menuService.getMenuById(req.params.menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  res.send(menu);
});

const updateMenu = catchAsync(async (req, res) => {
  const menu = await menuService.updateMenuById(req.params.menuId, req.body);
  res.send(menu);
});

const deleteMenu = catchAsync(async (req, res) => {
  await menuService.deleteMenuById(req.params.menuId);
  res.json('Menu deleted successfully').send();
});

const getMenuItemBySlug = catchAsync(async (req, res) => {
  const menuItem = await menuService.getMenuItemBySlug(res, req);
  res.send(menuItem);
});

module.exports = {
  createMenu,
  getMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
  getMenuItemBySlug,
};
