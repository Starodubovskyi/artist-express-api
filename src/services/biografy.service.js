// services.js
// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');

const getArtistData = async () => {
  const response = await axios.get(
    `https://mtalegacy.alloy.it/legacy/rest-api/v1/artist/get/${process.env.ACCOUNT_ID}/${process.env.ARTIST_ID}`
  );
  return response.data;
};

module.exports = {
  getArtistData,
};
