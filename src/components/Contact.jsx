import React, { useState } from "react";
import Common from "./common/Common";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import Modal from "./Portal/Modal";

const Contact = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section className="contact creative" id="kontakt">
        <div className="container">
          <div className="itemContent">
            <Common title="Kontakt" />
            <div className="content flex">
              <div className="contentRight">
                <img src="./images/home/21.jpg" alt="..." />
              </div>
              <div className="contentLeft">
                <span>
                  <FaMapMarkerAlt />
                  Radom
                </span>
                <br /> <br />
                <span>
                  <FaRegEnvelope />
                  puaro@vp.pl
                </span>
                <br /> <br />
                <span>
                  <FaCalendarAlt />
                  2022 - {new Date().getFullYear()}.
                </span>
                <form>
                  <h4>
                    <strong>Zofia Szymanowska-Lenartowicz</strong>
                  </h4>
                  <em>
                    (ur. 21 grudnia 1825 w Otwocku, zm. 8 lipca 1870 w
                    Miłosławiu) – polska artystka, malarka i poetka
                  </em>
                  <p>
                    Pochodziła z rodziny żydowskich uszlacheconych frankistów.
                    Była córką Józefa Szymanowskiego i jego drugiej żony,
                    Elżbiety z Młodzianowskich. Była żoną poety i rzeźbiarza
                    Teofila Lenartowicza. Pobrali się w Rzymie, w 1858; mieli
                    syna Jana, który zmarł w dzieciństwie. Zmarła na zapalenie
                    płuc spowodowane gruźlicą. Kształciła się w Dreźnie oraz w
                    Paryżu, w pracowni Ary’ego Scheffera. Autorka Pamiętników, w
                    których opisała m.in. wspólne życie Adama Mickiewicza i jego
                    żony Celiny, swojej przyrodniej siostry. Namalowała m.in.
                    portret Adama Mickiewicza.
                  </p>
                </form>
                <button className="primary-btn" onClick={() => Toggle()}>
                  Więcej <FaArrowRight />
                </button>
                <Modal
                  show={modal}
                  close={Toggle}
                  title="Okoliczności ślubu Lenartowiczów"
                >
                  <p>
                    W maju 1861 roku Teofil i Zofia postanowili wziąć ślub. Nie
                    pałali do siebie wielką miłością, ale stwierdzili, że razem
                    będzie im lepiej niż osobno. Z czasem jednak zbliżyli się do
                    siebie mocniej, co poskutkowało narodzinami syna, Jana,
                    który zmarł krótko po porodzie. Niedługo później Zofia,
                    zmagająca się z gruźlicą zachorowała na zapalenie płuc, na
                    które ostatecznie zmarła w 1870 roku.
                  </p>
                  <br />
                  <p>
                    <em>
                      paryskiesalonyromantykow.wordpress.com/zofia-szymanowska-lenartowicz
                    </em>
                  </p>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
