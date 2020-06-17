const axios = require("axios");

const getForecast = async (lat, lon) => {
  try {
    const token = `${process.env.OPEN_WEATHER_API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather`
    console.log("url " + url);
    const res = await axios.get(url, {
      params: {
        lat: lat,
        lon: lon,
        appid: token
      }
    })

    if (!res) {
      throw new Error("Cannot find your location")
    }
    console.log(res.data)
    return res.data
  } catch (e) {
    console.log(e)
    throw e;
  }
};

module.exports = getForecast;