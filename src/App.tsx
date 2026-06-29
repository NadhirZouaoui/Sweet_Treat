import { useState } from "react";
import Navbar from "./navBar.tsx";
import Home from "./Home";
import Menu from "./Menu";
import Cart from "./Cart.tsx";

import OrderMethods from "./OrderMethods.tsx";
import SignInPage from "./SignIn.tsx";
//import About from "./About";
//import Contact from "./Contact";
function App() {
  const [areItemsVisible, setAreItemsVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [orderMethodsOpen, setOrderMethodsOpen] = useState(false);
  const [isSignInPageOpen, setSignInPageOpen] = useState(false);

  const changeItemsVisibility = () => setAreItemsVisible((prev) => !prev);
  const changeCartVisibility = () => setIsCartVisible((prev) => !prev);
  const openOrderMethods = () => setOrderMethodsOpen(true);
  const closeOrderMethods = () => setOrderMethodsOpen(false);
  const openSignInPage = () => setSignInPageOpen(true);

  return (
    <>
      {!areItemsVisible && (
        <section id="navbar">
          <Navbar toggleCart={changeCartVisibility} />
        </section>
      )}

      <Cart
        isCartVisible={isCartVisible}
        toggleCart={changeCartVisibility}
        toggleOrderMethods={openOrderMethods}
      />
      {isSignInPageOpen ? (
        <SignInPage />
      ) : orderMethodsOpen ? (
        <OrderMethods openDelivery={() => {}} openPickUp={openSignInPage} />
      ) : (
        <>
          <section id="home">
            <Home
              areItemsVisible={areItemsVisible}
              isCartVisible={isCartVisible}
            />
          </section>
          <section id="menu">
            <Menu
              areItemsVisible={areItemsVisible}
              isCartVisible={isCartVisible}
              toggleItems={changeItemsVisibility}
              toggleCart={changeCartVisibility}
            />
          </section>
        </>
      )}
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
