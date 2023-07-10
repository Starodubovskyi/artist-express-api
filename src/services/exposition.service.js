const axios = require('axios');

const getExpositionData = async () => {
  try {
    const response = await axios.get(
      `https://mtalegacy.alloy.it/legacy/rest-api/v1/exposition/list/${process.env.ACCOUNT_ID}/${process.env.ARTIST_ID}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch exposition data');
  }
};

const getExpositionItem = async (expositionId) => {
  try {
    const response = await axios.get(
      `https://mtalegacy.alloy.it/legacy/rest-api/v1/exposition/get/${process.env.ACCOUNT_ID}/${expositionId}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch exposition data');
  }
};

module.exports = {
  getExpositionData,
  getExpositionItem,
};
