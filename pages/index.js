import HomePageComponent from "../components/HomeComponent"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import getGeocode from './../ulti/geocode';
import getForecast from './../ulti/forecast';

const HomePage = () => {
  const router = useRouter()
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null)
  console.log(`city ${router.query.city}`)

  if (city === "" && router.query.city !== undefined) {
    console.log("city != " + router.query.city);
    setCity(router.query.city)
  }

  const callApi = async () => {
    const location = await getGeocode(city)
    const forecast = await getForecast(location.geometry.coordinates[1], location.geometry.coordinates[0])
    console.log(forecast)
    setForecast(forecast);
  }
  useEffect(() => {
    console.log("useEffect " + city);
    if (city !== "") {
      console.log("should handle api here " + city);
      callApi();
    }
  }, [city])

  
  return <HomePageComponent city={city} forecast={forecast} greeting="Hello! Enter the name of your place to get weather forecast"/>
}

export default HomePage