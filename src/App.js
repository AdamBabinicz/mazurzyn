import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Creative from "./components/Creative";
import Education from "./components/Education";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Award from "./components/Award";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Home />
      <About />
      <Creative />
      <Education />
      <Work />
      <Portfolio />
      <Award />
      <Blog />
      <Contact />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;
