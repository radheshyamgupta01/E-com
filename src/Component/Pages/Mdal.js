import React from "react";
import ReactDOM from "react-dom";
import CartModal from "../Header/CartModal";
function Mdal({ total }) {
  return ReactDOM.createPortal(
    <div>
      <CartModal total={total}></CartModal>
    </div>,
    document.getElementById("modal")
  );
}

export default Mdal;
