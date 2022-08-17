import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from 'react-router-dom'

import SetCity from "./Components/SetCity";
import HomePage from './Components/HomePage';
import Loading from "./Components/Loading";
import WeatherDetails from "./Components/WeatherDetails";
import NotFound from "./Components/NotFound";

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
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details" element={<WeatherDetails />} />
              <Route path="/notFound" element={<NotFound />} />
              <Route path="/*" element={<Navigate to="/notFound"/>} />
              {/* <Route path="" element={}/> this Route is for hourly and daily forecast, this must be updadted in future...  */}
            </Routes>
          </>
          : <Loading />
        }
        <button 
          className={localStorage.length ? "absolute w-28 h-10 font-bold bg-black text-white bottom-5 left-5 rounded-3xl transition-all hover:rounded-lg" : "invisible"}
          onClick={() => {
            if(window.confirm("are you sure about change city?")) {
              window.localStorage.clear();
              window.location.reload()
            }
          }}
          >
          Change city
        </button>

      </ValuesContext.Provider>
    </WeatherDataContext.Provider>
  );
}

export default App;
