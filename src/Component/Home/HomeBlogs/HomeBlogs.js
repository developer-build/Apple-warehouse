import React from "react";
import blog1 from "../../../Assets/Images/blogs1.jpg";
import blog2 from "../../../Assets/Images/blogs2.jpg";

const HomeBlogs = () => {
  return (
    <section className="bg-black py-5">
      <h2 className="text-center mb-4">OUR BLOG</h2>
      <div className="container row row-cols-md-2 g-5 mx-auto">
        <div>
          <article
            style={{ boxShadow: "0 4px 21px -12px white" }}
            className="rounded"
          >
            <div className="px-3 pt-2">
              <h6 className="text-white fw-medium mb-3">HEADPHONES</h6>
              <h3 className="text-light">
                Top 10 Wireless Headphones for Your Smartphone
              </h3>
              <p className="text-white mt-3">June 9, 2022</p>
            </div>
            <img className="img-fluid w-100 rounded" src={blog1} alt="" />
          </article>
        </div>
        <div>
          <article
            style={{ boxShadow: "0 4px 21px -12px white" }}
            className="rounded"
          >
            <div className="px-3 pt-2">
              <h6 className="text-white mb-3">HEADPHONES</h6>
              <h3 className="text-light">
                Top 10 Wireless Headphones for Your Smartphone
              </h3>
              <p className="text-white mt-3">June 9, 2022</p>
            </div>
            <img className="img-fluid rounded" src={blog2} alt="" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
