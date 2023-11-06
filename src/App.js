import React, { useContext } from "react";
import Header from "./Component/Header/Header";
import Menue from "./Component/Header/Menue";
import Home from "./Component/Pages/Home"

import Store from "./Component/Pages/Store";
import ctx from "./Component/Contex/Ctx";
import Contact from "./Component/Pages/Contact"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactUs from "./Component/Pages/Contact"
import Footer from "./Component/Pages/Footer";
import Ragister from "./Component/Auth/Sign";
import Login from "./Component/Auth/Login";
// import CartModal from "./Component/Header/CartModal";
function App() {
  const { show } = useContext(ctx);
  return (
    <BrowserRouter>
      <Header></Header>
    
      {show && <Menue></Menue>}
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
        <ContactUs></ContactUs>
        </Route>
        <Route path="/store">
          <Store></Store>
        </Route>
        <Route path="/login">
          <Login></Login>

        </Route>
        <Route path="/store">
          <Store></Store>
        </Route>
        <Route path="/">
        <Ragister></Ragister>
        </Route>
       
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
