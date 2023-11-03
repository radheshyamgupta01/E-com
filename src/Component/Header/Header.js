import React, { useCallback, useContext } from "react";

import "./Header.css";
// import Menue from "./Menue";
// import ctx from "../Contex/Ctx";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

// function Header() {
//   const { displayHandler } = useContext(ctx);

//   return (
//     <div className="main-header bg-blue-600 flex h-16 justify-between py-4">
//       <div className="left font-serif px-5">E</div>

//       {/* Conditionally render menu icon on small screens */}
//       <div className="header-menu-icon lg:hidden">
//         <i className="ri-menu-3-line" onClick={displayHandler}></i>
//       </div>

//       <ul className="header-right flex px-5 gap-4 hidden lg:flex">
//         <NavLink to="/home">
//           <li>
//             <span className="font-serif">HOME</span>
//           </li>
//         </NavLink>
//         <NavLink to="/about">
//           <li>
//             <span className="font-serif">ABOUT</span>
//           </li>
//         </NavLink>
//         <NavLink to="/store">
//           <li className="font-serif">STORE</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li>
//             <span className="font-serif">CONTACT-US</span>
//           </li>
//         </NavLink>
//         <NavLink to="/sign">
//           <li>
//             <span className="font font-serif">LOGOUT</span>
//           </li>
//         </NavLink>
//       </ul>
//     </div>
//   );
// }

// export default Header;

import Menue from "./Menue";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import ctx from "../Contex/Ctx";

function Header() {
  let { isModal, displayHandler } = useContext(ctx);
  let { displayModal } = useContext(ctx);
  const displayModalHandler = useCallback(() => {
    displayModal();
  }, [isModal]);

  return (
    <div className=" bg-black text-white font-serif  flex h-16 justify-between py-4">
      <div className="left font-serif px-5 active:border-b-2 text-xl  "> GENERIC </div>

      <div className="header-menu-icon" onClick={displayHandler}>
        <i className="ri-menu-3-line"></i>
      </div>

      <ul className="header-right  px-5 gap-4 hidden lg:flex">
        <NavLink to="/home active">
          <li>
            <span className="font-serif active:border-b-2  text-white text-xl">HOME</span>
          </li>
        </NavLink>

        <NavLink to="/store">
          <li className="font-serif active:border-b-2  text-xl">STORE</li>
        </NavLink>
        <NavLink to="/contact">
          <li>
            <span className="font-serif active:border-b-2  text-xl">CONTACT-US</span>
          </li>
        </NavLink>

        <li className=" cursor-pointer">
          <span
            className="active:border-blue-500  border  border-sky-500 text-xl  outline-1 p-1 rounded font-serif"
            onClick={() => displayModalHandler()}
          >
            CART
          </span>
        </li>

        <NavLink to="/sign">
          <li>
            <span className="font font-serif active:border-b-2 text-xl">LOGOUT</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;
