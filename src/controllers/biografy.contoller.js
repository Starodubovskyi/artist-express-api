const { getArtistDataServise } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getArtist = catchAsync(async (req, res) => {
  const artistData = await getArtistDataServise.getArtistData();
  res.json(artistData);
});

module.exports = {
  getArtist,
};
