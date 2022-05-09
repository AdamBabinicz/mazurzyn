import React, { useState } from "react";
import Common from "./common/Common";
import { creative } from "../dummydata";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Modal from "./Portal/Modal";

const Creative = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

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
                      <button className="primary-btn" onClick={() => Toggle()}>
                        Więcej
                        <FaArrowRight />
                      </button>
                      <Modal show={modal} close={Toggle} title="Twórczość">
                        <p>
                          Poza tym Lenartowicz napisał między innymi: „Dwaj
                          Towiańczycy”, w którym opisuje śmierć Michała
                          Szweycera (przez pomyłkę nazywając go Ludwikiem
                          Szwejcerem) i Adolfa Rozwadowskiego, „Moje strony”,
                          „Rosła kalina” („z liściem szerokim (...)”, niezwykle
                          popularna z muzyką Ignacego Komorowskiego),
                          „Tęsknota”, „Wiersz do poezji”, „Duch sieroty”, „Jan
                          Kochanowski”, „Lirnik. Baśń”, „Łzy”, „Czajka”,
                          „Pustota”, „O powrocie do kraju”, „Zaproszenie”,
                          „Staruszek”; poemat liryczno-epicki „Bitwa
                          racławicka”, ukończony w r. 1858, a w rok później
                          wydany w Paryżu.
                        </p>
                        <br />
                        <p>
                          <em>pl.wikipedia.org/wiki/Teofil_Lenartowicz</em>
                        </p>
                      </Modal>
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

export default Creative;
