import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { GiWheat, GiSwirlString } from "react-icons/gi";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <h1>
              . <span>teofil</span>lenartowicz <GiSwirlString />
            </h1>
          </div>
          <nav>
            <button className="toggle" onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <FaTimes /> : <GoThreeBars />}
            </button>
            <ul
              className={
                sidebar ? "nav-links-sidebar active" : "nav-links-sidebar "
              }
              onClick={() => setSidebar(false)}
            >
              <li>
                <a href="/">Start</a>
              </li>
              <li>
                <a href="#życiorys">Życiorys</a>
              </li>
              <li>
                <a href="#twórczość">Twórczość</a>
              </li>
              <li>
                <a href="#rzeźbiarz">Rzeźbiarz</a>
              </li>
              <li>
                <a href="#poematy">Poematy</a>
              </li>
              <li>
                <a href="#album">Album</a>
              </li>
              <li>
                <a href="#olśnienie">Olśnienie</a>
              </li>
              <li>
                <a href="#inspiracje">Inspiracje</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
