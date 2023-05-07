import "./popularproducts.css";
import React from "react";
import { Productdata } from "./populardata";

const Popularproducts = () => {
  return (
    <div className="popularproducts_data">
    <h1>Popular Products</h1>
    <div className="main-container">
    
        
        {Productdata.map((Productdata) => (
         
         <div className="products-cards">
            
            <img src={Productdata.image}  alt="image"/>

          <div>
            <h2>{Productdata.name}</h2>
            <p>{Productdata.price}</p>
          </div>
          </div>

        ))}
     </div> 
    </div>
  );
};

export default Popularproducts;
