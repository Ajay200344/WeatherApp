import { useState } from 'react'
import './App.css'
import Home from './home'
import Nav from './nav'
import Location from './location'
import Forecast from './forecast'
import Search from './search'


function App() {
  const[lat, setlat]=useState();
  const[lon, setlon]=useState();

  return (
    <>
    <div className=" flex flex-col justify-between min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/src/assets/bg.webp')] lg:bg-[url('/src/assets/lgbackground.jpg')]"> 
    <Nav/>
    <Search/>
    <Location lati={setlat} long={setlon}/> 
    {lat && lon ? (
        <div className=" flex flex-col justify-between gap-2 ">
        <Home location={{ lat, lon }} />
        <Forecast location={{ lat, lon }} />
        </div>
        
      ) : (
        
        <h1 className='text-center font-bold text-2xl'>loading location...</h1>
        


      )}
       
     </div> 
    
    </>
  )
}

export default App
