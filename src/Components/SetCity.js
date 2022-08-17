import axios from "axios";
import React, { useEffect, useRef, useState } from "react";


const apiKey = "3af22782f7092876b6f36f43a63d2d5a"

function SetCity() {

  const [inputVal, setInputVal] = useState("")
  const [data, setData] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const clickHandler = () => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&limit=5&appid=${apiKey}`)
    .then(response => {
      setData([response.data[0]])
    })
  }

  const localStorages = () => {
    console.log(data[0].lat)
    console.log(data[0].lat, data[0].lon)
    localStorage.setItem("lat", JSON.stringify(data[0].lat))
    localStorage.setItem("lon", JSON.stringify(data[0].lon))
    localStorage.setItem("cityName", JSON.stringify(inputVal))
    window.location.reload()
  }

  return (
    <div className="flex flex-col items-center  my-72">
      <input 
      ref={inputRef} 
      value={inputVal} 
      onChange={event => setInputVal(event.target.value)}
      placeholder="tehran, ir"
      className="outline-8 border-2 rounded-xl border-black w-2/4 h-8 mb-12 text-center text-2xl focus:outline-2 focus:outline-blue-700" />

      <button 
      className='w-28 h-10 font-bold bg-black text-white text-center rounded-3xl transition-all hover:rounded-lg hover:bg-blue-700'
      onClick={inputVal ? clickHandler : alert("please enter a vaild city name!!")}>search</button>
      {
        data.length ?
          localStorages()
        : null
      }
      </div>
  );
}

export default SetCity;