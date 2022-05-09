import React from "react";
import { portfolio } from "../dummydata";
import Common from "./common/Common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <section className="portfolio creative" id="album">
        <div className="container">
          <Slider {...settings}>
            {portfolio.map((val) => {
              return (
                <>
                  <div className="itemContent flex">
                    <Common title="Album" />
                    <div className="contentRight">
                      <img src={val.cover} alt="..." />
                    </div>
                    <div className="contentLeft">
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                      <ul>
                        <li>
                          <AiOutlineMinus />
                          {val.p1}
                        </li>
                        <li>
                          <AiOutlineMinus />
                          {val.p2}
                        </li>
                        <li>
                          <AiOutlineMinus />
                          {val.p3}
                        </li>
                        <li>
                          <AiOutlineMinus />
                          {val.p4}
                        </li>
                        {/* <li>
                          <AiOutlineMinus />
                          {val.p5}
                        </li> */}
                      </ul>
                      <button className="primary-btn">
                        Więcej
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
