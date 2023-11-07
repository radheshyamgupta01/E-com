
import React, { useContext,useCallback } from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import ctx from "../Contex/Ctx"; 


function Menue() {
 
   let { isModal, displayHandler } = useContext(ctx);
   let { displayModal } = useContext(ctx);
   const displayModalHandler = useCallback(() => {
     displayModal();
   }, [isModal]);
  return (
    <div className="flex flex-col justify-start items-center bg-gray-800 h-full w-5/5 z-10 ">
    <ul className="flex flex-col gap-10 pr-10 text-white  font-normal   ">
    <NavLink to="/home" onClick={displayHandler}>   <li className="font-serif   font-extralight">HOME</li></NavLink> 
    <NavLink to="/contact" onClick={displayHandler}>   <li className="font-serif font-normal">CONTACT-US</li></NavLink> 
    <NavLink to="/store" onClick={displayHandler}>     <li className="font-serif font-normal">STORE</li></NavLink> 
    <NavLink to="/" onClick={displayHandler}>    <li className="font-serif font-normal ">REGISTER</li></NavLink> 
    <NavLink to="/" onClick={displayHandler}>   <li className="font-serif font-normal">LOGIN</li></NavLink> 
    <li className=" cursor-pointer">
        <span
          className="active:border-blue-500  border  border-white text-xl  outline-1 p-1 rounded font-serif"
          onClick={() => displayModalHandler()}
        >
          CART
        </span>
      </li>
      
    <NavLink to="/sign" onClick={displayHandler}>  <li className="font-serif font-normal">LOGOUT</li></NavLink> 
     
      
     
    </ul>
  </div>
   
  )
}

export default Menue;
