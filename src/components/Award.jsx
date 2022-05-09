import React from "react";
import { award } from "../dummydata";
import Common from "./common/Common";

const Award = () => {
  return (
    <>
      <section className="award creative" id="olśnienie">
        <div className="container">
          <div className="itemContent">
            <Common title="Olśnienie" />
            {award.map((val) => {
              return (
                <>
                  <div className="content flex">
                    <div className="contentLeft">
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                      <p>{val.desc1}</p>
                      <p>{val.desc2}</p>
                      <p>{val.desc3}</p>
                      <p>{val.desc4}</p>
                      <p>{val.desc5}</p>
                      <p>{val.desc6}</p>
                      <p>{val.desc7}</p>
                      <div className="box grid">
                        <div className="img">
                          <img src={val.img1} alt="..." />
                        </div>
                        <div className="img">
                          <img src={val.img2} alt="..." />
                        </div>
                        {/* <div className="img">
                          <img src={val.img3} alt="..." />
                        </div>
                        <div className="img">
                          <img src={val.img4} alt="..." />
                        </div> */}
                      </div>
                    </div>
                    <div className="contentRight">
                      <img src={val.cover} alt="..." />
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

export default Award;
