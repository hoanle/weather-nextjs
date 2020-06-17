require('dotenv').config()

module.exports = {
    env: {
        OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
        GEO_CODE_API_KEY: process.env.GEO_CODE_API_KEY
    }
}