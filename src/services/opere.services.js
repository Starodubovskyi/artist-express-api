// services.js
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const getArtworkListData = async () => {
  try {
    const response = await axios.get(
      `https://mtalegacy.alloy.it/legacy/rest-api/v1/artwork/list/${process.env.ACCOUNT_ID}/${process.env.PUBLICATION_WORKSPACE_ID}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch artwork list');
  }
};

const getArtworkEveryImageData = async () => {
  try {
    const response = await axios.get(
      `https://mtalegacy.alloy.it/legacy/rest-api/v1/artwork/get/${process.env.ACCOUNT_ID}/${process.env.ARTWORK_ID}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch artwork list');
  }ui
};

module.exports = {
  getArtworkListData,
  getArtworkEveryImageData,
};
