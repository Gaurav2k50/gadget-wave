import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="col">
          <div className="title">About</div>
          <div className="text">
          We are a tech hub, redefining connectivity and entertainment.
           Explore our range of innovative products—earphones, smartwatches,
            Bluetooth speakers, and headphones—for a seamless and immersive experience. 
            Elevate your lifestyle today.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Alpha-2, Greater Noida, UttarPradesh, 201310
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 01234 123 5678</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: hello@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Headphones</div>
          <div className="text">Smart Watches</div>
          <div className="text">Bluetooth Speakers</div>
          <div className="text">Wireless Earbuds</div>
          <div className="text">Home Theatre</div>
          <div className="text">Projectors</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            GAMECHANGER 2023 CREATED BY GS PREMIUM E-COMMERCE SOLUTION.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
