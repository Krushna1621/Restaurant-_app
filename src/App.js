import React, {useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const showcarthandler=()=>{
       setCartIsShown(true)
  }
  const hidecarthandler=()=>{
      setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown &&<Cart onClose={hidecarthandler}/>}
      <Header onShowCart={showcarthandler}></Header>
      <main> 
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
