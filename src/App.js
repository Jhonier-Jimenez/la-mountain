import React from "react";
import logo from "./images/logo.png";
import slider1 from "./images/slider1.png";
import slider2 from "./images/slider2.png";
import slider3 from "./images/slider3.png";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 500, min: 500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 500, min: 500 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 500, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };
  return (
    <div>
      <header></header>
      <div className="main-container">
        <div className="content-background top-content">
          <div className="content-container">
            <div className="header">
              <img className="logo" src={logo} alt="logo" />
              <div className="header-menu">
                <h2 className="header-menu-item">01.HISTORY</h2>
                <h2 className="header-menu-item">02.TEAM</h2>
              </div>
            </div>
            <div className="top-content-text-container">
              <h2 className="top-content-text top-content-text1">LOSANGELES</h2>
              <h2 className="top-content-text top-content-text2">MOUNTAINS</h2>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="header">
            <div className="middle-header-item-1">
              <h2 className="top-content-text1">LOSANGELES</h2>
              <h2 className="top-content-text2">MOUNTAINS</h2>
            </div>
            <div className="header-menu">
              <h2 className="middle-header-menu-item">01.HISTORY</h2>
              <h2 className="middle-header-menu-item">02.TEAM</h2>
            </div>
          </div>
        </div>

        <div className="content-background middle-content">
          <div className="content-container">
            <div className="history-container">
              <h1 className="number-text">01.</h1>
              <h2 className="history-text">HISTORY</h2>
              <div className="description-text">
                <h5 className="description-text-history">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h5>
              </div>
            </div>

            <Carousel
              showDots={true}
              responsive={responsive}
              containerClass="carousel-container"
              itemClass="carousel-item"
            >
              <img src={slider1} alt="slider1"></img>
              <img src={slider2} alt="slider2"></img>
              <img src={slider3} alt="slider3"></img>
            </Carousel>
          </div>
        </div>
        <div className="content-container">
          <div className="history-container climb-container">
            <h1 className="number-text">02.</h1>
            <h2 className="history-text">CLIMB</h2>
            <div className="description-text climb-description">
              <h5 className="description-text-history">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h5>
            </div>
          </div>
        </div>

        <div className="mountain-container">
          <div className="content-container content-container-mountain">
            <div className="mountain-text-container">
              <h1 className="mountain-text">MOUNTAIN 1</h1>
            </div>
            <div className="mountain-text-container">
              <h2 className="mountain-text">MOUNTAIN 2</h2>
            </div>
          </div>
        </div>
        <div className="content-background bottom-content">
          <div className="content-container content-container-bottom">
            <div className="bottom-info">
              <h2 className="schedule">SCHEDULE</h2>
            </div>
          </div>
          <div className="footer">
            <div className="footer-content">
              <div className="content-container content-container-footer">
                <div className="footer-left">
                  <img className="logo" src={logo} alt="logo" />
                  <div className="footer-text-container">
                    <h2 className="footer-text">LOSANGELES</h2>
                    <h2 className="footer-text">MOUNTAINS</h2>
                  </div>
                </div>
                <h3 className="copyright">
                  COPYRIGHT 2016. ALL RIGHTS RESERVED
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
