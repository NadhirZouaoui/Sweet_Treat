import { useState } from "react";

import Navbar from "./navBar.tsx";
import Home from "./Home";
//import Menu from "./Menu";
//import About from "./About";
//import Contact from "./Contact";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      {/* <section id="menu"> */}
      {/*   <Menu /> */}
      {/* </section> */}
      {/* <section id="about"> */}
      {/*   <About /> */}
      {/* </section> */}
      {/* <section id="contact"> */}
      {/*   <Contact /> */}
      {/* </section> */}
    </>
  );
}

export default App;
