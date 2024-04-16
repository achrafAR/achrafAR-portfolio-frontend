import React from "react";
import "./service.css";
import businessStrategy from "../../Images/businessStrategy.png";
import development from "../../Images/development.png";
import mobileApp from "../../Images/mobileApp.png";
import ecommerce from "../../Images/ecommerce.png";
import consultaion from "../../Images/consultaion.png";

function Service() {
  return (
    <div className="services-container" id="services">
      <div className="services">
        <div className="awesome-services">
          <h1>My Awesome Service</h1>
          <p>
          we embark on every project with a drive to exceed expectations and create remarkable online experiences.
           Let us be your partner in success on the exciting journey of web development!
          </p>
        </div>
        <div className="services-card-container">
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={businessStrategy} alt="" />
              <h3>Business Strategy</h3>
              <p>
                Craft strategic plans to propel businesses towards growth and
                success.
              </p>
            </div>
          </div>
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={development} alt="" />
              <h3>Website Development</h3>
              <p>
                Create dynamic, responsive websites tailored to clients' unique
                needs.
              </p>
            </div>
          </div>
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={mobileApp} alt="" />
              <h3>Mobile App Development</h3>
              <p>
                Design and develop innovative mobile applications for seamless
                user experiences.
              </p>
            </div>
          </div>
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={ecommerce} alt="" />
              <h3>E-Commerce Website</h3>
              <p>
                Build robust online stores optimized for sales and customer
                satisfaction.
              </p>
            </div>
          </div>
          <div className="services-card-details">
            <div className="services-logo-text">
              <img src={consultaion} alt="" />
              <h3>Consultation And Training</h3>
              <p>
                Provide expert guidance and technical insights to drive project
                success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
