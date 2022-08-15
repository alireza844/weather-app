import React, { useEffect, useState } from "react";
import axios from "axios";

import SetCity from "./Components/SetCity";
import HomePage from './Components/HomePage';
import Loading from "./Components/Loading";

export const WeatherDataContext = React.createContext();
export const ValuesContext = React.createContext();

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    .then(resonse => {
      setData([resonse.data])
    })
    .catch(err => console.log(err))
  }, [])

  const apiKey = "3af22782f7092876b6f36f43a63d2d5a";
  const lon = localStorage.getItem("lon");
  const lat = localStorage.getItem("lat");
  const values = {apiKey: apiKey , lat: lat, lon: lon}
  
  return (
    <WeatherDataContext.Provider value={data}>
      <ValuesContext.Provider value={values}>
        {
          !localStorage.length
          ? <SetCity />
          : data.length ?
          <HomePage />
          : <Loading />
        }
      </ValuesContext.Provider>
    </WeatherDataContext.Provider>
  );
}

export default App;
