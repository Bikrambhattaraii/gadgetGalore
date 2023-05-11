import "./aboutus.css";
import React from "react";
import Image from "../../assest/aboutus.jpg";
const Aboutus = () => {
  return (
    <div className="aboutus-main-container">
      <div className="aboutus-upper">
        <img src={Image} alt="about us" />
        <h1>about Us</h1>
      </div>
      <div className="aboutus-mission-copntainer">
        <div className="aboutus-text">
          <div className="aboutus-text-left">
            <h1>our vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ad
              vel at iure consequuntur quae, vitae aperiam modi, aliquid unde
              nulla accusantium harum deleniti quo architecto dolorum fugiat
              maxime voluptas. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quam incidunt cupiditate esse dignissimos nemo,
              illo, nostrum eveniet molestiae expedita, qui quod ab eum
              blanditiis itaque reiciendis! Repellat doloribus inventore
              sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum quo assumenda vel sit quam. Sint hic corporis incidunt
              aperiam magnam esse quod enim, praesentium dicta mollitia
              blanditiis? Est, veniam tenetur! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Sint odio, quasi pariatur quidem,
              veniam ipsam tempora nulla animi quo distinctio fuga. In, nemo
              architecto nobis error non illo suscipit maxime? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Repellat neque itaque
              dolorum, animi atque optio reprehenderit aliquid perferendis
              veritatis, laudantium, eum vitae nam beatae. Odio alias magni
              molestiae est nihil! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Alias nihil, hic atque corporis praesentium
              tempora accusamus suscipit deserunt dolor aut mollitia quis, porro
              iste, illum asperiores magnam doloribus. Possimus, doloribus?
            </p>
          </div>
          <div className="aboutus-text-right">
            <img src="" alt="" />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Aboutus;
