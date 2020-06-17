const axios = require("axios");

const getGeocode = async (address) => {
  try {
    const token = `${process.env.GEO_CODE_API_KEY}`;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`;
    console.log("url " + url);
    const res = await axios.get(url, {
      params: {
        access_token: token
      }
    });
    const location = res.data && res.data.features && res.data.features[0]

    if (!location) {
      throw new Error("Cannot find your location")
    }
    return location;
  } catch (e) {
    throw e;
  }
}

module.exports = getGeocode;