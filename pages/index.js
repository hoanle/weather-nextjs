import HomePageComponent from "../components/HomeComponent"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import getGeocode from './../ulti/geocode';
import getForecast from './../ulti/forecast';

const HomePage = (props) => {
  const router = useRouter()
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null)
  console.log(`city ${router.query.city}`)

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
    }
  }, [props.city])

  
  return <HomePageComponent city={props.city} forecast={props.forecast} greeting="Hello! Enter the name of your place to get weather forecast"/>
}

export async function getServerSideProps(context) {
  if (context != null && context.query != null && context.query.city != undefined) {
    let city = context.query.city
    const location = await getGeocode(city)
    const forecast = await getForecast(location.geometry.coordinates[1], location.geometry.coordinates[0])
    return { props: { city: context.query.city, forecast: forecast } }
  } else {
    return { props: { city: "", forecast: null } }
  }
  
}


export default HomePage