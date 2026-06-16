import { useState } from "react";
import Navbar from "./navBar.tsx";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart.tsx";
//import About from "./About";
//import Contact from "./Contact";
function App() {
  const [areItemsVisible, setAreItemsVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const changeItemsVisibility = () => setAreItemsVisible((prev) => !prev);
  const changeCartVisibility = () => setIsCartVisible((prev) => !prev);
  return (
    <>
      {!areItemsVisible && (
        <section id="navbar">
          <Navbar toggleCart={changeCartVisibility} />
        </section>
      )}

      <Cart isCartVisible={isCartVisible} />
      <section id="home">
        <Home areItemsVisible={areItemsVisible} isCartVisible={isCartVisible} />
      </section>
      <section id="menu">
        <Menu
          areItemsVisible={areItemsVisible}
          isCartVisible={isCartVisible}
          toggle={changeItemsVisibility}
        />
      </section>
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
