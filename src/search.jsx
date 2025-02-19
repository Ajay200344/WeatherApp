import React, { useState } from "react";

function Search(){
    const [city, setcity] = useState("");
    const [data, setData] = useState("");

    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
     function myfun(){
        
        if(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          )
            .then((response) => {
                if(!response.ok){
                    alert("data not found");
                    return null;
                }
                 return response.json();
            })
            .then((wea) => {
              setData(wea);
              

            })
            
        }else{
            alert("Enter city name");
        }
     }

    return(
        <>
        <div className="mt-25 flex justify-center items-center gap-5  pl-2">
             <input type="text" className="border font-bold text-xl rounded-lg" id="input" placeholder="Search by city name..." onChange={(e)=> setcity(e.target.value)} />
             <button className="border cursor-pointer font-bold text-xl rounded-lg" onClick={myfun}>Search</button>
            
        </div>
               {data && (
                <div className=" rounded-xl flex justify-between bg-[rgba(0,0,0,0.0)] m-3 font-bold border border-black" >
                  <div className="p-4 pt-6">
                    <p>{data.sys.country}</p>
                    <p className="text-xl italic">{data.name}</p>
                    <p className="text-5xl">
                      {data.main.temp}°
                    </p>
                    <p className="text-xl">Feels like {data.main.feels_like}°</p>
                    <p className="text-xl">Humidity: {data.main.humidity}</p>
                  </div>
                  <div className="flex flex-col justify-center mb-4 items-center">
                    <img
                      className=" w-36 h-36"
                      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      
                    />
                    <p className="italic text-xl font-bold">{data.weather[0].main}</p>
                  </div>
                </div>)}
              
        
        </>
    )
}

export default Search