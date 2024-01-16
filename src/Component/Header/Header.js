import React, { useCallback, useContext ,useState} from "react";

import "./Header.css";

import Menue from "./Menue";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import ctx from "../Contex/Ctx";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  let { isModal, arr,displayHandler } = useContext(ctx);
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
    <div className="bg-black text-white font-serif flex h-16 justify-between py-4">
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
          <span className="font-serif text-xl">HOME</span>
        </li>
      </NavLink>

      <NavLink to="/store">
        <li className="font-serif text-xl">STORE</li>
      </NavLink>

      <NavLink to="/contact" activeClassName="active">
        <li>
          <span className="font-serif text-xl">CONTACT-US</span>
        </li>
      </NavLink>

      <NavLink to="/cart" className="cursor-pointer">
        <li className="topLeft relative">
          <span
            className="border border-white text-xl outline-1 p-1 rounded font-serif"
            onClick={() => displayModalHandler()}
          >
            CART
          </span>
          <span className="up">{arr.length}</span>
        </li>
      </NavLink>

      <li className="relative" onClick={closeDropdown}>
        <span className="font font-serif text-xl cursor-pointer">
          Dropdown
        </span>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-black text-white p-2 z-50">
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
