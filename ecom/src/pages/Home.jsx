import Header from "../components/header/header";
import Herosection from "../components/hero/Herosection";
import Footer from "../components/footer/footer"

 import React from 'react'
import Aboutus from "src/components/aboutus/aboutus";
 
 const Home = () => {
   return (
     <div>
       <Header />
       <Herosection/>
       {/* <Aboutus /> */}
       <Footer />
       
     </div>
   )
 }
 
 export default Home
 