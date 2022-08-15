import axios from "axios";
import { useEffect, useState } from "react";

const useGeocoding = (cityName) => {
    const apikey = "3af22782f7092876b6f36f43a63d2d5a";
    
    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apikey}`)
        .then(response => {
            setLon(response.data[0].lon)
            setLat(response.data[0].lat)
        })
    })
    
    return {lat: lat, lon: lon}
};

export default useGeocoding