import React from "react";
import { education } from "../dummydata";
import Common from "./common/Common";

const Education = () => {
  return (
    <>
      <section className="education creative" id="rzeźbiarz">
        <div className="container">
          <div className="itemContent">
            <Common title="Rzeźbiarz" />

            <div className="content flex">
              <div className="contentRight">
                <img src="./images/home/2.png" alt="..." />
              </div>
              <div className="contentLeft">
                <p>
                  Lenartowicz zajął się rzeźbą głównie z powodu rozczarowania
                  brakiem powodzenia pisanych przezeń utworów.
                </p>
                {education.map((val) => {
                  return (
                    <>
                      <div className="box flex">
                        <h3>{val.id}.</h3>
                        <h4>
                          {val.name} <br />
                          <span>{val.program} </span>
                          <br />
                          <span>{val.year} </span>
                        </h4>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

// https://piotrjaroszynski.pl/meta/felietony-wywiady/1859-teofil-lenartowicz-mistrz-stylu-prostego
// https://culture.pl/pl/tworca/teofil-lenartowicz
