import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./footerstyles.css";
import { FaGithub,FaFacebookSquare,FaLinkedin,FaTiktok,FaYoutube } from "react-icons/fa";

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
      <div className="footer-mid-section">
        <h1>pages
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>privacy policy</li>
          <li>terms and conditions</li>
        </ul>
        </h1>
        <h1>follow us on
        <ul className="followus-section">
          <li><FaGithub></FaGithub></li>
          <li><FaFacebookSquare /></li>
          <li><FaLinkedin /></li>
          <li><FaTiktok /></li>
          <li><FaYoutube /></li>
        </ul>
       </h1>
       </div>
      <div className="payment-section"> 
      <img />
      </div>
    </div>
  );
};

export default footer;
