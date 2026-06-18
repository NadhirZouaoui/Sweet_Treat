import { useState } from "react";
import { X } from "lucide-react";
import ThreeDButton from "./ThreeDButton";
import {
  allItemsArray,
  categoriesArray,
  Category,
  type itemProps,
  useCounterStore,
} from "./store.ts";

interface Visibility {
  areItemsVisible: boolean;
  isCartVisible: boolean;
  toggleItems: () => void;
  toggleCart: () => void;
}

interface productCardProps {
  item: itemProps;
  buttonBgColor: string;
}

interface itemsGroupProps {
  currentCategory: Category;
  buttonBgColor: string;
  onClose: () => void;
  toggleCart: () => void;
}

function ProductCard(props: productCardProps) {
  const currentItemsQte = useCounterStore((state) => state.qteItems);
  const addToCart = useCounterStore((state) => state.addToCart);
  return (
    <>
      <div className="h-150 w-111.25 bg-[rgba(0,0,0,0.05)] rounded-3xl border border-white border-box">
        <img
          src={props.item.imgUrl}
          alt="item"
          className="w-full h-3/4 rounded-t-3xl scale-[0.7]"
        ></img>
        <div className="w-full h-1/4 bg-[rgba(0,0,0,0.1)] rounded-b-3xl text-xl text-white pr-8 pl-5 py-3 flex flex-col justify-around">
          <div className="flex justify-around">
            <div className="font-semibold text-[1.65rem] w-3/5">
              {props.item.description}
            </div>
            <div className="font-medium text-[rgba(255,255,255,0.9)]">
              {props.item.price}
            </div>
          </div>

          <ThreeDButton
            color={props.buttonBgColor}
            width="w-50"
            height="h-13"
            cartIconExist
            text={` Add To Cart ${currentItemsQte[props.item.id] > 0 ? `(${currentItemsQte[props.item.id]})` : ""}`}
            extraFeatures="self-end font-bold mb-1"
            onClick={() => addToCart(props.item.id)}
          />
        </div>
      </div>
    </>
  );
}

function Items(items: itemsGroupProps) {
  const productCardsArray: productCardProps[][] = [];
  for (let i = 0; i < allItemsArray.length; i++) {
    const itemsPerCategory: productCardProps[] = [];
    for (let j = 0; j < allItemsArray[i].length; j++) {
      const productCard: productCardProps = {
        item: allItemsArray[i][j],
        buttonBgColor: items.buttonBgColor,
      };
      itemsPerCategory.push(productCard);
    }
    productCardsArray.push(itemsPerCategory);
  }

  const currentCatItems: productCardProps[] =
    productCardsArray[items.currentCategory];
  const itemsAddedCount = useCounterStore((state) => state.totalItemsAdded);

  return (
    <>
      <div className="fixed z-3 w-screen h-screen top-0 flex items-center justify-center overflow-auto delay-1000">
        <div
          className="absolute right-10 z-4 top-10 size-30 rounded-full flex justify-center items-center
          text-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.1)] hover:cursor-pointer transition-all ease-in duration-150"
          onClick={items.onClose}
        >
          <X size={50} />
        </div>
        <div className="absolute top-0 max-w-350 py-25 flex justify-center  flex-wrap gap-8 box-content">
          {currentCatItems.map((product) => (
            <ProductCard
              item={product.item}
              buttonBgColor={product.buttonBgColor}
            />
          ))}
        </div>
        <ThreeDButton
          color="bg-secondary"
          width="w-230.5"
          height="h-16"
          text="Check Your Cart"
          extraFeatures={`text-white text-3xl font-bold z-4 fixed -bottom-50 transition-all ease-out duration-500 ${itemsAddedCount > 0 ? "bottom-8" : ""}`}
          cartIconExist={false}
          onClick={() => {
            items.toggleCart();
            items.onClose();
          }}
        />
      </div>
    </>
  );
}
function Menu({
  areItemsVisible,
  isCartVisible,
  toggleItems,
  toggleCart,
}: Visibility) {
  const [categoryIndex, setIndex] = useState(Category.Cookies);
  function decrimentIndex() {
    setIndex((prevCategoryIndex) =>
      prevCategoryIndex - 1 < 0 ? 2 : prevCategoryIndex - 1,
    );
  }
  function incrimentIndex() {
    setIndex((prevCategoryIndex) => (prevCategoryIndex + 1) % 3);
  }

  return (
    <>
      {areItemsVisible && (
        <Items
          currentCategory={categoriesArray[categoryIndex].category}
          buttonBgColor={categoriesArray[categoryIndex].buttonBgColor}
          onClose={toggleItems}
          toggleCart={toggleCart}
        />
      )}

      <div
        className={`min-h-[calc(100vh-80px)]
        ${areItemsVisible ? "blur-3xl" : "blur-0"}
        ${isCartVisible ? "blur-md" : "blur-0"}
        ${categoriesArray[categoryIndex].bgColor}
        relative
        bg-center
        bg-cover
        w-full
        flex
        items-center
        justify-evenly
        transition-all duration-200 ease-in 
      `}
      >
        <div
          onClick={decrimentIndex}
          className="rotate-180
          hover:bg-black
          hover:text-white
          transition-all duration-300 ease-in
          cursor-pointer
          pb-2
          bg-white
          size-25
          flex items-center justify-center
          rounded-full
          text-3xl"
        >
          →
        </div>

        <div
          className="flex flex-col justify-around items-center
          w-2/7
          min-w-120
          h-[85vh]
          mt-20"
        >
          <div
            className={`text-3xl
            ${categoriesArray[categoryIndex].textColor}
            tracking-widest
            transition-all duration-300 ease-in
            -mt-20
            mb-5`}
          >
            pick the category
          </div>

          <img
            src={categoriesArray[categoryIndex].imgUrl}
            alt="Image"
            onClick={toggleItems}
            className={`-mt-15
            cursor-pointer
            block
            hover:scale-[1.05]
           ${categoriesArray[categoryIndex].shape}
            transition-all ease-in duration-150`}
          ></img>

          <ThreeDButton
            extraFeatures="mb-5 text-3xl text-white rounded-2xl font-semibold"
            width="w-1/1"
            color={categoriesArray[categoryIndex].buttonBgColor}
            height="h-15"
            text={categoriesArray[categoryIndex].label}
            cartIconExist={false}
            onClick={toggleItems}
          />
        </div>
        <div
          onClick={incrimentIndex}
          className="bg-white
          hover:bg-black
          hover:text-white
          transition-all duration-300 ease-in
          cursor-pointer
          pb-2
          size-25
          flex items-center justify-center
          rounded-full
          text-3xl"
        >
          →
        </div>
      </div>
    </>
  );
}

export default Menu;
