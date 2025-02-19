import React from "react";
import option from "./assets/burger-bar.png";
function Nav(){
    return(
        <>
        <div className="flex justify-between z-2 rounded-b-2xl items-center border w-full fixed top-0 bg-[rgba(0,0,0,0.0)] p-3 ">
            <div className="w-10 h-10 ml-2"><img src={option}/></div>
            <div className="flex justify-center items-center">
            <div className="italic text-5xl font-bold underline">Blue</div>
            <div className="italic text-2xl underline">Sky</div>
            </div>
            
        </div>
        </>
    );
}


export default Nav