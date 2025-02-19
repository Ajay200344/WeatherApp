import React, { useState, useEffect } from "react";

function Home({location}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    setLoading(true);
    setData(null);

    if (location.lat && location.lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
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
    return <h1 className="text-center font-bold text-2xl">loading data...</h1>;
  }

  return (
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
    </div>
  );
}

export default Home;
