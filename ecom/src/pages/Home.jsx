import Header from "../components/header/header";
import Herosection from "../components/hero/Herosection";
import Footer from "../components/footer/footer"
import Cart from "../../src/components/cart/cart"
 import React from 'react'
import Aboutus from "src/components/aboutus/aboutus";
import Ourteam from "src/components/outteam/ourteam";
import GoToTop from "src/components/scrolltop/scroll";
 
 const Home = () => {
   return (
     <div>
       <Header />
       <Herosection/>
       <Aboutus />
       {/* <Ourteam />   */}
       {/* <Cart /> */}
       <GoToTop />
       <Footer />

       
     </div>
   )
 }
 
 export default Home
 