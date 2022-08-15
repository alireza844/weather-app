import React, { useEffect, useState } from "react";
import axios from "axios";

import useGeocoding from '../hooks/useGeocoding'

function Test() {

  const apiKey = "3af22782f7092876b6f36f43a63d2d5a";

  const [data, setData] = useState([])
  const city = window.localStorage.getItem("cityName")


  const geoCode = useGeocoding(city)

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${JSON.parse(city)}&limit=5&appid=${apiKey}`)
      .then(response => {
        setData(response.data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(city)}
      {JSON.stringify(data.sys)}
    </div>
  );
}

export default Test;