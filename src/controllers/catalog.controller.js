const { getCatalogService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getCatalogList = catchAsync(async (req, res) => {
  const artistData = await getCatalogService.fetchCatalogList();
  res.json(artistData);
});

const getCatalog = catchAsync(async (req, res) => {
  const artistData = await getCatalogService.fetchCatalog();
  res.json(artistData);
});

module.exports = {
  getCatalogList,
  getCatalog,
};
