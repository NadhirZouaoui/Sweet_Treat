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
import { X } from "lucide-react";
import ThreeDButton from "./ThreeDButton";

enum Category {
  Cookies,
  Brownies,
  Tiramisu,
}
interface Visibility {
  areItemsVisible: boolean;
  isCartVisible: boolean;
  toggle: () => void;
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
interface itemProps {
  imgUrl: string;
  description: string;
  price: string;
  qte: number;
}

interface productCardProps {
  item: itemProps;
  buttonBgColor: string;
}

interface itemsGroupProps {
  currentCategory: Category;
  buttonBgColor: string;
  onClose: () => void;
}

function ProductCard(props: productCardProps) {
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
            text={` Add To Cart ${props.item.qte > 0 ? `(${props.item.qte})` : ""}`}
            extraFeatures="self-end font-bold mb-1"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

const allItemsArray: itemProps[][] = [
  [
    {
      imgUrl: item,
      description: "Classic Cookie",
      price: "7 Dt",
      qte: 0,
    },
    {
      imgUrl: item2,
      description: "Pistachio Cookie",
      price: "7 Dt",
      qte: 0,
    },
    {
      imgUrl: item3,
      description: "Red Velvet Cookie",
      price: "7 Dt",
      qte: 0,
    },
    {
      imgUrl: item8,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
      qte: 0,
    },
    {
      imgUrl: item9,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
      qte: 0,
    },
  ],
  [
    {
      imgUrl: item5,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
      qte: 0,
    },
    {
      imgUrl: item6,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
      qte: 0,
    },
  ],
];

function Items(items: itemsGroupProps) {
  const productCardsArray: productCardProps[][] = [
    [
      {
        item: allItemsArray[0][0],
        buttonBgColor: items.buttonBgColor,
      },
      {
        item: allItemsArray[0][1],
        buttonBgColor: items.buttonBgColor,
      },
      {
        item: allItemsArray[0][2],
        buttonBgColor: items.buttonBgColor,
      },
      {
        item: allItemsArray[0][3],
        buttonBgColor: items.buttonBgColor,
      },
      {
        item: allItemsArray[0][4],
        buttonBgColor: items.buttonBgColor,
      },
    ],
    [
      {
        item: allItemsArray[1][0],
        buttonBgColor: items.buttonBgColor,
      },
      {
        item: allItemsArray[1][1],
        buttonBgColor: items.buttonBgColor,
      },
    ],
  ];

  const currentCatItems: productCardProps[] =
    productCardsArray[items.currentCategory];

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
        <div className="absolute top-0 py-25 flex justify-center  flex-wrap gap-8 box-content">
          {currentCatItems.map((product) => (
            <ProductCard
              item={product.item}
              buttonBgColor={product.buttonBgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}
function Menu({ areItemsVisible, isCartVisible, toggle }: Visibility) {
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
      bgColor: "bg-primary",
      textColor: "text-orange-300",
      label: "Show Cookies",
      buttonBgColor: "bg-orange-300",
    },
    {
      category: Category.Brownies,
      shape: "[clip-path:inset(15%_15%_15%_15%)]",
      imgUrl: brownieimg,
      bgColor: "bg-[#b5816e]",
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
      {areItemsVisible && (
        <Items
          currentCategory={categoriesArray[categoryIndex].category}
          buttonBgColor={categoriesArray[categoryIndex].buttonBgColor}
          onClose={toggle}
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
            onClick={toggle}
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
            onClick={toggle}
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
