import React, { createContext, useState } from 'react'
export const ShopContext= createContext(null);

const getDefaultCart =() =>{
    let cart ={};
    for (let i=1; i< Products.length;i++){
    cart[i]=0;
}
return cart 
};

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState();
    const addToCart =(itemId)=>{
setCartItems((prev)=> ({...prev,[itemId]:prev[itemID]+1}))
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemID]+1}))
    }
    const contextValue={cartItems ,addToCart ,removeFromCart}
  return (
    <ShopContext.Provider>
{props.children}
    </ShopContext.Provider>
  )
}

export default ShopContext
