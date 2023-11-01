import React, {  useState } from "react";
import ctx from "./Ctx";
function CtxProvider({ children}) {
  const [show, setShow] = useState(false);
  let [isModal,setIsModal]=useState(false)
  let [arr,setArr]=useState([])
  
  const displayHandler = () => {
    setShow(!show);
  };

let displayModal=()=>{
  setIsModal(!isModal)
}
const arrData=(data)=>{
  setArr((prv)=>[...prv,data])
}
  return <ctx.Provider value={{show, displayHandler,displayModal,isModal,arrData,arr,setArr}}>
    {children}
    </ctx.Provider>;
}

export default CtxProvider;
