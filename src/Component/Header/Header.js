import React, { useCallback, useContext } from "react";

import "./Header.css";

import Menue from "./Menue";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import ctx from "../Contex/Ctx";

function Header() {
  let { isModal, arr,displayHandler } = useContext(ctx);
  let { displayModal } = useContext(ctx);
  const displayModalHandler = useCallback(() => {
    displayModal();
  }, [isModal]);

  return (
    <div className=" bg-black text-white font-serif  flex h-16 justify-between py-4">
      <div className="left font-serif px-5 active:border-b-2 text-xl  ">
        {" "}
        GENERIC{" "}
      </div>

      <div className="header-menu-icon" onClick={displayHandler}>
        <i className="ri-menu-3-line"></i>
      </div>

      <ul className="header-right  px-5 gap-4 hidden lg:flex">
        <NavLink to="/home active">
          <li>
            <span className="font-serif active:border-b-2  text-white text-xl">
              HOME
            </span>
          </li>
        </NavLink>

        <NavLink to="/store">
          <li className="font-serif active:border-b-2  text-xl">STORE</li>
        </NavLink>
        <NavLink to="/contact">
          <li>
            <span className="font-serif active:border-b-2  text-xl">
              CONTACT-US
            </span>
          </li>
        </NavLink>
        <NavLink to="/cart">
          <li className=" cursor-pointer topLeft ">
            <span
              className="active:border-blue-500  border  border-white text-xl  outline-1 p-1 rounded font-serif"
              onClick={() => displayModalHandler()}
            >
              CART 
             
            </span>
            <span className="up">{arr.length}</span>

          </li>
        </NavLink>

        <NavLink to="/sign">
          <li>
            <span className="font font-serif active:border-b-2 text-xl">
              SIGN{" "}
            </span>
          </li>
        </NavLink>

        <NavLink to="/login">
          <li>
            <span className="font font-serif active:border-b-2 text-xl">
              LOGIN
            </span>
          </li>
        </NavLink>

        <NavLink to="/login">
          <li>
            <span className="font font-serif active:border-b-2 text-xl">
              LOGOUT
            </span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
