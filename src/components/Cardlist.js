import React from "react";
import "./Cardlist.css";
import new1 from "../assets/new1.png";
import new3 from "../assets/new3.png";
import new2 from "../assets/new2.png";
import new4 from "../assets/new4.png";
import new5 from "../assets/new.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import latest1 from "../assets/latest.png";
import lap1 from "../assets/lap.png";

function Cardlist() {
  return (
    <div className="head-cont">
      <div className="container sub-cont" >
        <h2>
          <i>Discover your next business opportunity</i>
        </h2>

        <div className="row ">
          <div className="col-md-4">
            <div className="col-text"><h3>New Arrivals</h3></div>
          </div>
          <div className="col-md-4">
            <div className="col-text"><h3>Saving Spotlight</h3></div>
          </div>
          <div className="col-md-4">
            <div className="col-text"><h3>Top ranking</h3></div>
          </div>
        </div>

        <div className="row main-head-cont">
          <div className="col-md-4 sub-head-cont">
            <div className="sub-sub-cont">
            <div className="row">
              <div className="col-md-6">
                <div className="first-img">
                  <img src={new1} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="first-img">
                  <img src={new2} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="first-img">
                  <img src={new3} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="first-img">
                  <img src={new4} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="second-img">
                  <img src={new5} alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="t-1">
                  <div><h5>New this week</h5></div>
                  <div><h7>Products from Verified Suppliers</h7></div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-md-4 sub-head-cont">
            <div className="sub-sub-cont">
            <div className="row">
              <div className="col-md-4">
                <div className="second-f">
                  <img src={latest1} alt="" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="t-2">
                  <div><h5>Lowest Price in 180 Days</h5></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div><h5>Deals on Best Sellers</h5></div>
              <div className="col-md-12">
                <div className="sec-l">
                  <img src={lap1} alt="" />
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="col-md-4 sub-head-cont">  
            <div className="sub-sub-cont">
            <div className="row">
              <div className="col-md-12">
              <div><h4>Most Popular</h4></div>
                <div className="sec-f">
                  <img src={shoe1} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="third-f">
                  <img src={shoe2} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="third-f">
                  <img src={shoe3} alt="" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="third-f">
                  <img src={shoe4} alt="" />
                </div>
              </div>
            </div>
            </div>
          </div>

 

        </div>
      </div>
    </div>
  );
}

export default Cardlist;
