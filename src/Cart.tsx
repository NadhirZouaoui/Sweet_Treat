import allItemsArray from "./Menu.tsx";
interface cartVisibility {
  isCartVisible: boolean;
}

const Cart = ({ isCartVisible }: cartVisibility) => {
  return (
    <>
      <div
        className={`fixed top-20 z-3 ${isCartVisible ? "right-0 backdrop-brightness-50" : "-right-[30vw]"}
                    w-[30vw] h-[calc(100vh-80px)] transition-all linear duration-300 bg-primary text-5xl`}
      >
        Your Cart Items
      </div>
      <div
        className={`fixed w-screen z-2 transition-all linear duration-150 left-0 top-20 h-[calc(100vh-80px)] bg-black/70 ${!isCartVisible ? "opacity-0 pointer-events-none" : "pacity-100 pointer-events-auto"}`}
      ></div>
    </>
  );
};

export default Cart;
