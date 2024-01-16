import React, { useCallback, useContext, useState } from "react";
import { VscHistory, VscHome, VscMail } from "react-icons/vsc";
import { BsDiamond, BsExclude } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";
import { VscLayers } from "react-icons/vsc";
import { FaStore } from "react-icons/fa";
import { BsArrowDownSquare } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import "./Header.css";

import Menue from "./Menue";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import ctx from "../Contex/Ctx";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let { isModal, arr, displayHandler } = useContext(ctx);
  let { displayModal } = useContext(ctx);
  const displayModalHandler = useCallback(() => {
    displayModal();
  }, [isModal]);
  const closeDropdown = () => {
    // Add logic to close the dropdown
    // setIsDropdownOpen(false);
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="bg-gray-200 shadow text-black font-serif flex h-16 justify-between py-4 border-b-blue-400">
        <div className="left font-serif px-5 active:border-b-2 text-xl">
          {" "}
          GENERIC{" "}
        </div>

        <div className="header-menu-icon" onClick={displayHandler}>
          <i className="ri-menu-3-line"></i>
        </div>

        <ul className="header-right px-5 gap-4 hidden lg:flex">
          <NavLink to="/home" activeClassName="active">
            <li>
              <span className="font-serif text-xl flex">
                <VscHome size={32} color="" /> Home
              </span>
            </li>
          </NavLink>

          <NavLink to="/store">
            <li className="font-serif text-xl  me-2 ms-2 flex">
            <BsDiamond  size={32}/> Store
            </li>
          </NavLink>

          <NavLink to="/contact" activeClassName="active">
            <li>
              <span className="font-serif text-xl flex">
                <VscMail size={32} color="" /> Contact
              </span>
            </li>
          </NavLink>

          <NavLink to="/cart" className="cursor-pointer">
            <li className="topLeft relative">
              <span
                className=" text-xl  font-serif"
                onClick={() => displayModalHandler()}
              >
                <BsCart3 size={32} />
              </span>
              <span className="up">{arr.length}</span>
            </li>
          </NavLink>

          <li className="relative" onClick={closeDropdown}>
            <span className="font font-serif text-xl cursor-pointer flex">
            <BsArrowDownSquare  size={32}/>
            </span>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-gray-100 text-black p-2 z-50">
                <NavLink to="/sign" activeClassName="active">
                  <li>
                    <span className="font-serif">SIGN</span>
                  </li>
                </NavLink>

                <NavLink to="/login" activeClassName="active">
                  <li>
                    <span className="font-serif">LOGIN</span>
                  </li>
                </NavLink>

                <NavLink to="/login" activeClassName="active">
                  <li>
                    <span className="font-serif">LOGOUT</span>
                  </li>
                </NavLink>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
