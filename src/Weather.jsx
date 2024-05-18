import { useState } from "react"
import axios from "axios";
function Weather()
{
  const [city,setcity] = useState("")

  const [weather,setweather] = useState("")
  const [temp,settemp] = useState("")
  const [desc,setdesc] = useState("")
  
  function handleCity(evt)
  {
    setcity(evt.target.value)
  }

  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=533c0bab2795d051820620cc56ad1e9a`)

    weatherData.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(success.data.main.temp)
    })
  }


    return(
        <div className="bg-cyan-500 p-20">
          <div className="bg-purple-500 p-10 rounded-md">
            <h1 className="text=2x1 font-bold text-white">Weather Report</h1>
            <p className="text-white">I can give you a weather report about your city !</p>
            <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md" placeholder="Ender your city name"></input><br></br>
            <button onClick={getWeather} className="border-1 bg-emerald-500 text-white p-2 rounded-md mt-2">Get Report</button>

            <div>
                <h1 className="text-white"><b>Weather: </b>{weather}</h1>
                <p  className="text-black"><b>Temperature:</b>{temp}</p>
                <p  className="text-white"><b>Description:</b>{desc}</p>
            </div>
          </div>
        </div>
      )
    
}


export default Weather