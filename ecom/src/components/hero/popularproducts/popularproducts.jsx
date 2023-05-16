import "./popularproducts.css";
import React from "react";
import { Productdata } from "./populardata";
import Button from "../../button component/button"

const Popularproducts = () => {
  return (
    <div className="popularproducts_data">
      <h1>Popular Products</h1>
      <div className="main-container">
        {Productdata.map((Productdata) => (
          <div className="products-cards" key={Productdata.id}>
            <img src={Productdata.image} alt={Productdata.id} />
            <div>
              <h2>{Productdata.name}</h2>
              <p>Rs{Productdata.price}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularproducts;
