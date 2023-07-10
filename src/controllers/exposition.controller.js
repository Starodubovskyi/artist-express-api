const { getExpositionService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getExposition = catchAsync(async (req, res) => {
  const expositionData = await getExpositionService.getExpositionData();
  res.json(expositionData);
});

const getExpositionItem = catchAsync(async (req, res) => {
  const expositionId = req.params.id;

  const expositionData = await getExpositionService.getExpositionItem(expositionId);
  res.json(expositionData);
});

module.exports = {
  getExposition,
  getExpositionItem,
};
