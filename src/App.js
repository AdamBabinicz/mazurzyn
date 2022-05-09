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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
