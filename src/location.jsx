import React from "react";
import {useEffect} from "react";

function Location({lati,long}){


  const getLocation = () => {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        lati(position.coords.latitude);
        long(position.coords.longitude);
      },
      (error) => {
        console.error("Error:", error);
      },
      {enableHighAccuracy:true, timeout:10000, maximumAge:0}
    );
    
  };  

  
  const checkLocationPermission = () => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
         setTimeout(getLocation(), 3000);
      } 
    });
  };

  
  useEffect(() => {
    alert("enable location if it is disable");
    checkLocationPermission(); 
    const interval = setInterval(checkLocationPermission, 3000);

    return () => clearInterval(interval); 
  }, []);

  
}
export default Location