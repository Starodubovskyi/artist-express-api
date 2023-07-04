const { getArtworkListService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getArtworkList = catchAsync(async (req, res) => {
  const artworkList = await getArtworkListService.getArtworkListData();
  res.json(artworkList);
});

const getArtworkEveryImage = catchAsync(async (req, res) => {
  const artwork_id = req.params.id;
  const artworkList = await getArtworkListService.getArtworkEveryImageData(artwork_id);
  res.json(artworkList);
});
module.exports = {
  getArtworkList,
  getArtworkEveryImage,
};
