import React from "react";
import "./cart.css";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  return (
    <>
      <header className="cart-portion">
        <div className="continue-shopping">
          <FaArrowLeft size={60} />
        </div>
        <h3> continue shopping</h3>

        <div className="cart-icon">
          <FaShoppingCart size={60} />
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping cart</h1>
        <p className="total-items">
          you have<span className="total-items-count">7</span> itmes in the cart
        </p>
      <div className="cart-items-container">
        <div className="items-info">
          <div className="product-img">
            <img alt="cart-image"/>
          </div>
          <div className="title">
            <h2>Iphone XSmax</h2>
            <p>black color</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Cart;
