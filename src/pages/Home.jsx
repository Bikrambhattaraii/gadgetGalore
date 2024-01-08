import Herosection from "../components/hero/Herosection";
import Cart from "../../src/components/cart/cart"
 import React from 'react'
import Aboutus from "src/components/aboutus/aboutus";
import Ourteam from "src/components/outteam/ourteam";
import GoToTop from "src/components/scrolltop/scroll";
 
 const Home = () => {
   return (
     <>
       <Herosection/>
       <Aboutus />
       {/* <Ourteam />   */}
       {/* <Cart /> */}
       <GoToTop /> 
     </>
   )
 }
 
 export default Home
 