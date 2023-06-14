const { getArtworkListService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getArtworkList = catchAsync(async (req, res) => {
  const artworkList = await getArtworkListService.getArtworkListData();
  res.json(artworkList);
});

const getArtworkEveryImage = catchAsync(async (req, res) => {
  const artworkList = await getArtworkListService.getArtworkEveryImageData();
  res.json(artworkList);
});
module.exports = {
  getArtworkList,
  getArtworkEveryImage,
};
