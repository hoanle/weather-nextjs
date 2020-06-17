if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
  }
module.exports = {
    env: {
        OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
        GEO_CODE_API_KEY: process.env.GEO_CODE_API_KEY
    }
}