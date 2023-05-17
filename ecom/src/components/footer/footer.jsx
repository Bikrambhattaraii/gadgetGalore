import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./footerstyles.css";
import {
  FaGithub,
  FaFacebookSquare,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const footer = () => {
  return (
    <div className="main-footer">
      <div className="subscribe_section">
        <h1>subscribe</h1>

        <input type="email" placeholder="enter your email" />
        <p className="icon">
          {" "}
          <RiCustomerService2Fill size={60} />{" "}
        </p>
        <div className="contact-section">
          <p>call us on</p>
          <p>+977-9824339439</p>
        </div>
      </div>
      <div className="footer-mid-section">
        <div className="pages-footer-mid">
        <h1>
          pages </h1>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>contact us</li>
            <li>privacy policy</li>
            <li>terms and conditions</li>
          </ul>
      </div>  
        <h1 className="follow-us-header">
          follow us on
          <ul className="followus-section">
            <li>
              <FaGithub color="gray" />
            </li>
            <li>
              <FaFacebookSquare color="gray" />
            </li>
            <li>
              <FaLinkedin color="gray" />
            </li>
            <li>
              <FaTiktok color="gray" />
            </li>
            <li>
              <FaYoutube color="gray" />
            </li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default footer;
