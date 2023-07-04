const express = require('express');
const menuController = require('../../controllers/menu.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();
// private
router.post('/manage-menu', menuController.createMenu);
router.get('/manage-menu', menuController.getMenu);
router.get('/manage-menu/:menuId', menuController.getMenuById);
router.patch('/manage-menu/:menuId', menuController.updateMenu);
router.delete('/manage-menu/:menuId', menuController.deleteMenu);

// public
router.get('/public/menu-item/', menuController.getMenuItemBySlug);

// menuItem = isSystem === false
router.get('/public/menu-item/is-system', menuController.getMenuItemByIsSystem);
module.exports = router;
