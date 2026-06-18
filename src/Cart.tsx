import { allItemsArray, useCounterStore, type itemProps } from "./store.ts";
import ThreeDButton from "./ThreeDButton.tsx";

interface cartVisibility {
  isCartVisible: boolean;
  toggleCart: () => void;
}
interface ItemInCartProps extends itemProps {
  qte: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ItemInCart = (props: ItemInCartProps) => {
  return (
    <div className="flex bg-white/60 h-25 w-full border border-white rounded-lg ">
      <img
        className="w-22 h-full object-cover"
        src={props.imgUrl}
        alt={props.description}
      ></img>
      <div className="flex flex-1 items-center justify-between px-4">
        <div className="flex flex-col justify-center">
          <span>{props.description}</span>
          <div className="flex items-center gap-3 mt-2">
            <button
              className="w-7 h-7 rounded-full bg-white text-gray-800 font-bold flex items-center justify-center cursor-pointer hover:bg-gray-100 active:scale-95 transition"
              onClick={props.onDecrease}
            >
              -
            </button>
            <span>{props.qte}</span>
            <button
              className="w-7 h-7 rounded-full bg-white text-gray-800 font-bold flex items-center justify-center cursor-pointer hover:bg-gray-100 active:scale-95 transition"
              onClick={props.onIncrease}
            >
              +
            </button>
          </div>
        </div>
        <span className="font-semibold whitespace-nowrap">{props.price}</span>
      </div>
    </div>
  );
};

const parsePrice = (price: string): number => {
  const num = parseFloat(price);
  return isNaN(num) ? 0 : num;
};

const Cart = ({ isCartVisible, toggleCart }: cartVisibility) => {
  const currentItemsQte = useCounterStore((state) => state.qteItems);
  const addToCart = useCounterStore((state) => state.addToCart);
  const removeFromCart = useCounterStore((state) => state.removeFromCart);
  const cartItemsCount = useCounterStore((state) => state.totalItemsAdded);

  let totalPrice = 0;
  allItemsArray.forEach((itemsPerCat) =>
    itemsPerCat.forEach((item) => {
      totalPrice += parsePrice(item.price) * currentItemsQte[item.id];
    }),
  );

  return (
    <>
      <div
        className={`fixed top-20 z-10 ${isCartVisible ? "right-0" : "-right-[30vw]"}
                    w-[30vw] h-[calc(100vh-80px)] transition-all ease-out duration-500 bg-primary text-gray-800 flex flex-col font-semibold p-6`}
      >
        <h2 className="text-3xl font-bold mb-6 text-center border-b pb-4 border-gray-300">
          {cartItemsCount == 0 ? `Your Cart is empty` : "Your Cart Items"}{" "}
        </h2>

        <div className="flex-1 overflow-auto pr-1 flex flex-col gap-4 ">
          {allItemsArray.map((itemsPerCat) =>
            itemsPerCat.map((item) => {
              if (currentItemsQte[item.id] > 0) {
                return (
                  <ItemInCart
                    key={item.id}
                    {...item}
                    qte={currentItemsQte[item.id]}
                    onIncrease={() => addToCart(item.id)}
                    onDecrease={() => removeFromCart(item.id)}
                  />
                );
              }
              return null;
            }),
          )}
        </div>
        <div className="flex items-center justify-between border-t border-gray-300 pt-4 mb-4">
          <span className="text-lg">Total</span>
          <span className="text-xl font-bold">{totalPrice} Dt</span>
        </div>
        <ThreeDButton
          color="bg-orange-300"
          width="w-full"
          height="h-14"
          text="Finish Check Out →"
          extraFeatures="text-white text-3xl font-bold"
          cartIconExist={false}
          onClick={() => {}}
        />
      </div>

      <div
        className={`fixed w-screen z-9 transition-all ease-out duration-500 left-0 top-20 h-[calc(100vh-80px)] bg-black/70 ${
          !isCartVisible
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
        onClick={toggleCart}
      ></div>
    </>
  );
};

export default Cart;
