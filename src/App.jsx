import React from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services/Services";
import Education from "./components/education/Education";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
