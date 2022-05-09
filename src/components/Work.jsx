import React from "react";
import { work } from "../dummydata";
import Common from "./common/Common";

const Work = () => {
  return (
    <>
      <section className="work creative education" id="poematy">
        <div className="container">
          <div className="itemContent">
            <Common title="Poematy" />

            <div className="content flex">
              <div className="contentLeft">
                {work.map((val) => {
                  return (
                    <>
                      <div className="box flex">
                        <button className="primary-btn">{val.years}</button>
                        <h3>
                          {val.compnay} <br />
                          <p>{val.desc}</p>
                        </h3>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="contentRight">
                <img src="./images/home/11.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
