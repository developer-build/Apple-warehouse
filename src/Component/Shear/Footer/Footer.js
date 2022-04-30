import React from "react";
import "./Footer.css";
import facebookIcon from "../../../Assets/Icons/facebook.png";
import instagramIcon from "../../../Assets/Icons/instragram.png";
import linkedinIcon from "../../../Assets/Icons/linkedin.png";
import TwitterIcon from "../../../Assets/Icons/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row row-cols-md-3 ">
          <div>
            <h3>ABOUT US</h3>
            <p>
              In our warehouse, we try to store the best products. You can have
              your product in our warehouse store without any worries
            </p>
            <h2>Phonesy</h2>
          </div>
          <div>
            <h3>Online help</h3>

            <li>Track a repair</li>
            <li>Terms & conditions</li>
            <li>Privacy policy & cookies</li>
            <li>Contact us</li>
          </div>
          <div>
            <h3>Social</h3>

            <li>
              <a
                href="https://www.facebook.com/DeveloperShahadatHossain/"
                target="black"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="black"
                href="https://www.linkedin.com/in/developer-sahadat/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="black"
                href="https://www.instagram.com/developershahadat/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a target="black" href="https://twitter.com/wd_shahadat">
                Twitter
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer-navbar">
        <div className="container">
          <div className="row row-cols-md-2 justify-content-center align-items-center">
            <div>
              <p> Copyright &copy; 2022 Phonesy WareHouse</p>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/DeveloperShahadatHossain/"
                target="black"
              >
                <img src={facebookIcon} style={{ width: "30px" }} alt="" />
              </a>

              <a
                target="black"
                href="https://www.linkedin.com/in/developer-sahadat/"
              >
                <img src={linkedinIcon} style={{ width: "30px" }} alt="" />
              </a>

              <a
                target="black"
                href="https://www.instagram.com/developershahadat/"
              >
                <img src={instagramIcon} style={{ width: "30px" }} alt="" />
              </a>

              <a target="black" href="https://twitter.com/wd_shahadat">
                <img src={TwitterIcon} style={{ width: "30px" }} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
