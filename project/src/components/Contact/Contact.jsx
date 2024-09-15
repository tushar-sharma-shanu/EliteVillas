import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p> "We are here to make your luxury stay unforgettable. Contact our team for any inquiries or personalized assistance."</p>
        <p>
        For immediate assistance or special requests, call our 24/7 customer service
        <br /><br />
        Have questions or need more information? Send us an email, and we’ll respond within 24 hours. 
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 8894257767</span>
              </div>
              <div>
                <p>Email</p>
                <span>tusharsharma12shanu@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Himachal Pardesh Una (177203)</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
