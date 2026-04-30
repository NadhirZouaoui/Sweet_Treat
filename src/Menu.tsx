import cookieimg from "./assets/cookieCat.png";
import brownieimg from "./assets/browniesCat.png";
import tiramisuimg from "./assets/tiramisuCat.png";
import item from "./assets/cookie_items/item.png";
import item2 from "./assets/cookie_items/item2.png";
import item3 from "./assets/cookie_items/item3.png";

import item5 from "./assets/cookie_items/item5.png";
import item6 from "./assets/cookie_items/item6.png";

import item8 from "./assets/cookie_items/item8.png";
import item9 from "./assets/cookie_items/item9.png";
import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
enum Category {
  Cookies,
  Brownies,
  Tiramisu,
}
interface catProps {
  category: Category;
  shape: string;
  bgColor: string;
  imgUrl: string;
  textColor: string;
  buttonBgColor: string;
  label: string;
}
interface productCardProps {
  imgUrl: string;
  buttonBgColor: string;
  description: string;
  price: string;
}
interface itemsProps {
  currentCategory: Category;
  buttonBgColor: string;
  onClose: () => void;
}

interface buttonProps {
  color: string;
  width: string;
  height: string;
  text: string;
  extraFeatures: string;
  cartIconExist: boolean;
  onClick: () => void;
}

const ThreeDButton = (props: buttonProps) => {
  const heightNumber: number = parseInt(props.height.replace(/[^\d.]/g, ""));
  const shadowHeight: number = heightNumber * 0.5;
  return (
    <button
      onClick={props.onClick}
      className={` rounded-full ${props.color}  ${props.width} ${props.height} flex items-center justify-center border-none
                hover:border-2 hover:border-black hover:shadow-none! hover:translate-y-2 ease-in transition-all cursor-pointer
                ${props.extraFeatures}`}
      style={{
        boxShadow: `0px ${shadowHeight}px 0 0 black`,
      }}
    >
      {props.cartIconExist && (
        <ShoppingCart size={25} color="white" className="mr-2" />
      )}
      {props.text}
    </button>
  );
};

function ProductCard(props: productCardProps) {
  return (
    <>
      <div className="h-150 w-111.25 bg-[rgba(0,0,0,0.05)] rounded-3xl border border-white border-box">
        <img
          src={props.imgUrl}
          alt="item"
          className="w-full h-3/4 rounded-t-3xl scale-[0.7]"
        ></img>
        <div className="w-full h-1/4 bg-[rgba(0,0,0,0.1)] rounded-b-3xl text-xl text-white pr-8 pl-5 py-3 flex flex-col justify-around">
          <div className="flex justify-around">
            <div className="font-semibold text-[1.65rem] w-3/5">
              {props.description}
            </div>
            <div className="font-medium text-[rgba(255,255,255,0.9)]">
              {props.price}
            </div>
          </div>

          <ThreeDButton
            color={props.buttonBgColor}
            width="w-45"
            height="h-13"
            cartIconExist
            text=" Add To Cart"
            extraFeatures="self-end font-bold mb-1"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

function Items(items: itemsProps) {
  const allItemsArray: productCardProps[][] = [
    [
      {
        imgUrl: item,
        buttonBgColor: items.buttonBgColor,
        description: "Classic Cookie",
        price: "7 Dt",
      },
      {
        imgUrl: item2,
        buttonBgColor: items.buttonBgColor,
        description: "Pistachio Cookie",
        price: "7 Dt",
      },
      {
        imgUrl: item3,
        buttonBgColor: items.buttonBgColor,
        description: "Red Velvet Cookie",
        price: "7 Dt",
      },
    ],

    [
      {
        imgUrl: item8,
        buttonBgColor: items.buttonBgColor,
        description: "test testtttt tesst  teeest",
        price: "7 Dt",
      },
      {
        imgUrl: item9,
        buttonBgColor: items.buttonBgColor,
        description: "test testtttt tesst  teeest",
        price: "7 Dt",
      },
    ],
    [
      {
        imgUrl: item5,
        buttonBgColor: items.buttonBgColor,
        description: "test testtttt tesst  teeest",
        price: "7 Dt",
      },
      {
        imgUrl: item6,
        buttonBgColor: items.buttonBgColor,
        description: "test testtttt tesst  teeest",
        price: "7 Dt",
      },
    ],
  ];

  const currentCatItems: productCardProps[] =
    allItemsArray[items.currentCategory];

  return (
    <>
      <div className="absolute z-1 w-full h-full top-[100vh] flex items-center justify-center overflow-auto">
        <div
          className="absolute right-10 top-10 size-30 rounded-full flex justify-center items-center
          text-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.1)] hover:cursor-pointer transition-all ease-in duration-150"
          onClick={items.onClose}
        >
          <X size={50} />
        </div>
        <div className="h-[80vh] w-350 flex justify-center items-center flex-wrap opacity-100 gap-8 box-content">
          {currentCatItems.map((product) => (
            <ProductCard
              imgUrl={product.imgUrl}
              buttonBgColor={product.buttonBgColor}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  function showItems() {
    setIsVisible(true);
  }
  function hideItems() {
    setIsVisible(false);
  }

  const [categoryIndex, setIndex] = useState(Category.Cookies);
  function decrimentIndex() {
    setIndex((prevCategoryIndex) =>
      prevCategoryIndex - 1 < 0 ? 2 : prevCategoryIndex - 1,
    );
  }
  function incrimentIndex() {
    setIndex((prevCategoryIndex) => (prevCategoryIndex + 1) % 3);
  }

  const categoriesArray: catProps[] = [
    {
      category: Category.Cookies,
      shape: "[clip-path:circle(40%)]",
      imgUrl: cookieimg,
      bgColor: "bg-amber-100",
      textColor: "text-orange-300",
      label: "Show Cookies",
      buttonBgColor: "bg-orange-300",
    },
    {
      category: Category.Brownies,
      shape: "[clip-path:inset(15%_15%_15%_15%)]",
      imgUrl: brownieimg,
      bgColor: "bg-[#B5816E]",
      textColor: "text-[#4D3228]",
      label: "Show Brownies",
      buttonBgColor: "bg-[#4D3228]",
    },
    {
      category: Category.Tiramisu,
      shape: "[clip-path:inset(15%_15%_20%_15%)]",
      imgUrl: tiramisuimg,
      bgColor: "bg-orange-300",
      textColor: "text-orange-900",
      label: "Show Tiramisus",
      buttonBgColor: "bg-orange-900",
    },
  ];

  return (
    <>
      {isVisible && (
        <Items
          currentCategory={categoriesArray[categoryIndex].category}
          buttonBgColor={categoriesArray[categoryIndex].buttonBgColor}
          onClose={hideItems}
        />
      )}
      <div
        className={`min-h-screen
        ${isVisible ? "blur-3xl " : "blur-0"}
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
          className="flex flex-col justify-center items-center
          max-w-1/3
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
            onClick={showItems}
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
            onClick={showItems}
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
