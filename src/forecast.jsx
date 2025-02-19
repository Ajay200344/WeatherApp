import React from "react";
import { useEffect, useState } from "react";

function Forecast({location}){
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


   useEffect(() => {
      setLoading(true);
      setData(null);
  
      if (location.lat && location.lon) {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((wea) => {
            setData(wea);
            setLoading(false);
          })
          .catch((error) => console.error(error));
      }
    }, []);
  

    if (loading) {
         return <h1></h1>;
      }
    

    
      return (
        
        <div className="w-full overflow-x-auto whitespace-nowrap rounded-2xl p-2 ">
            {data.list.map((day, index)=>
            [0, 8, 16, 24, 32, 4, 12, 20, 28, 36].includes(index) ? (
                 
                 <div key={index} className="inline-block rounded-2xl border border-black m-1 font-bold w-50 text-center bg-[rgba(0,0,0,0.0)]">
                  
                      <p className="text-xl">{day.dt_txt}</p>
                      <p className="text-xl">{data.city.name}</p>
                      <p className="text-2xl">{day.main.temp}°</p>
                      <p className="text-lg">Feels like {day.main.feels_like}°</p>
                      <p className="text-lg">Humidity : {day.main.humidity}</p>
                      <img className=" mx-auto" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                      <p className="italic text-xl font-bold">{day.weather[0].main}</p>
                 </div>
            ):null
               
            )}
           

        
        </div>
      );
    
  
}
export default Forecast