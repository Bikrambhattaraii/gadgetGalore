import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./footerstyles.css";

const footer = () => {
  return (
    <div className="main-footer">
      <div className="subscribe_section">
        <h1>subscribe</h1>

        <input type="email" placeholder="enter your email" />
   <p className="icon">  <RiCustomerService2Fill size={60} /> </p>
       <div className="contact-section">
          <p>
            
            call us on
          </p>
          <p>+977-9824339439</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
