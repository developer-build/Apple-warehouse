import React from "react";
import team1 from "../../../Assets/Images/team1.jpg";
import team2 from "../../../Assets/Images/team2.jpg";
import team3 from "../../../Assets/Images/team3.jpg";
import facebookIcon from "../../../Assets/Icons/facebook.png";
import instagramIcon from "../../../Assets/Icons/instragram.png";
import twitterIcon from "../../../Assets/Icons/twitter.png";

const OurTeam = () => {
  return (
    <section style={{ backgroundColor: "#242B36" }} className="py-5">
      <h2 className="text-center mb-5">OUR TEAM</h2>
      <div className="container g-5 mx-auto row row-cols-md-3">
        <div>
          <div className="bg-light text-center">
            <img src={team1} alt="" className="img-fluid rounded" />
            <div className="py-2">
              <h4>JAMES ANDERSON</h4>
              <p>
                James is the owner of Techzoid who founded our online store 10
                years ago
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: "20px" }} src={facebookIcon} alt="" />
                <img
                  className="mx-2"
                  style={{ width: "20px" }}
                  src={instagramIcon}
                  alt=""
                />

                <img style={{ width: "20px" }} src={twitterIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="bg-light text-center">
            <img src={team2} className="img-fluid rounded" alt="" />
            <div className="py-2">
              <h4>REBECCA MARTINEZ</h4>
              <p>
                Rebecca is our sales manager who knows everything about gadgets
                and laptops.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: "20px" }} src={facebookIcon} alt="" />
                <img
                  className="mx-2"
                  style={{ width: "20px" }}
                  src={instagramIcon}
                  alt=""
                />

                <img style={{ width: "20px" }} src={twitterIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light text-center">
            <img src={team3} className="img-fluid rounded" alt="" />
            <div className="py-2">
              <h4>SAM WILLIAMS</h4>
              <p>
                Sam is our marketing manager who is passionate about modern
                technologies.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <img style={{ width: "20px" }} src={facebookIcon} alt="" />
                <img
                  className="mx-2"
                  style={{ width: "20px" }}
                  src={instagramIcon}
                  alt=""
                />

                <img style={{ width: "20px" }} src={twitterIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
