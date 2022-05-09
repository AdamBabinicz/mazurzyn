import React from "react";
import Common from "./common/Common";
import { creative } from "../dummydata";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const Creative = () => {
  return (
    <>
      <section className="creative" id="twórczość">
        <div className="container">
          <div className="itemContent">
            <Common title="Twórczość" />
            {creative.map((val) => {
              return (
                <>
                  <div className="content flex">
                    <div className="contentLeft">
                      <FaQuoteLeft className="quote" />
                      <h2>{val.heading}</h2>
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                      <button className="primary-btn">
                        Więcej
                        <FaArrowRight />
                      </button>
                    </div>
                    <div className="contentRight">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
