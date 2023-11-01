
import React, { useContext } from "react";
import "./Menue.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ctx from "../Contex/Ctx";

function Menue() {
   const {displayHandler}=useContext(ctx)
  return (
    <div className="flex flex-col justify-start items-center bg-gray-800 h-full w-5/5 z-10 ">
      <ul className="flex flex-col gap-10 pr-10 text-white font-bold text-2xl  ">
      <NavLink to="/home" onClick={displayHandler}>   <li className="font-serif">HOME</li></NavLink> 
      <NavLink to="/contact" onClick={displayHandler}>   <li className="font-serif">ContactUs</li></NavLink> 
      <NavLink to="/store" onClick={displayHandler}>     <li className="font-serif">STORE</li></NavLink> 
      <NavLink to="/" onClick={displayHandler}>    <li className="font-serif">REGISTER</li></NavLink> 
      <NavLink to="/" onClick={displayHandler}>   <li className="font-serif">LOGIN</li></NavLink> 
        
      <NavLink to="/sign" onClick={displayHandler}>  <li className="font-serif">LOGOUT</li></NavLink> 
       
        
       
      </ul>
    </div>
  );
}

export default Menue;
