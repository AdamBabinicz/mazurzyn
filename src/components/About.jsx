import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { about } from "../dummydata";
import Common from "./common/Common";
import Modal from "./Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section className="about" id="życiorys">
        <div className="container">
          <div className="itemContent">
            <Common title="Życiorys" />
            {about.map((data) => {
              const {
                id,
                name,
                herb,
                phone,
                fax,
                dob,
                nation,
                heading,
                title,
                desc,
              } = data;
              return (
                <>
                  <div key={id} className="content flex">
                    <div className="contentLeft">
                      <div className="details flex">
                        <h4 className="h2Top">Imię i Nazwisko :</h4>
                        <h4>{name}</h4>
                      </div>
                      <div className="details flex">
                        <h4 className="h2Top">Herb :</h4>
                        <h4>{herb}</h4>
                      </div>
                      <div className="details flex">
                        <h4 className="h2Top">Upamiętnienie :</h4>
                        <h4>{phone}</h4>
                      </div>
                      <div className="details flex">
                        <h4 className="h2Top">Data urodzenia :</h4>
                        <h4>{dob}</h4>
                      </div>
                      <div className="details flex">
                        <h4 className="h2Top">Data śmierci :</h4>
                        <h4>{fax}</h4>
                      </div>
                      <div className="details flex">
                        <h4 className="h2Top">Narodowość :</h4>
                        <h4>{nation}</h4>
                      </div>
                      <button className="primary-btn" onClick={() => Toggle()}>
                        Czytaj <FaArrowRight />
                      </button>
                      <Modal
                        show={modal}
                        close={Toggle}
                        title="Krótki życiorys"
                      >
                        <p>
                          Pochodził z drobnoszlacheckiej rodziny Lenartowiczów
                          herbu Pobóg. Był synem Karola, mistrza murarskiego (w
                          przeszłości uczestnika insurekcji kościuszkowskiej) i
                          Marii Kwasieborskiej herbu Cholewa. Ożenił się z Zofią
                          Szymanowską herbu Młodzian (zm. 1870), przyrodnią
                          siostrą Celiny Szymanowskiej, żony Adama Mickiewicza z
                          którą miał syna Jana.
                        </p>
                        <br />
                        <p>
                          <em>pl.wikipedia.org/wiki/Teofil_Lenartowicz</em>
                        </p>
                      </Modal>
                    </div>
                    <div className="contentRight">
                      <div className="heading">
                        <h2>{heading}</h2>
                      </div>
                      <div className="para">
                        <span>
                          Członek honorowy Towarzystwa Muzeum Narodowego
                          Polskiego w Rapperswilu (od 1890)
                        </span>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
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

export default About;
