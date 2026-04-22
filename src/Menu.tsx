import cookieimg from "./assets/cookieCat.png";
import brownieimg from "./assets/browniesCat.png";
import tiramisuimg from "./assets/tiramisuCat.png";
import item from "./assets/cookie_items/item.png";
import item2 from "./assets/cookie_items/item2.png";
import item3 from "./assets/cookie_items/item3.png";
import item4 from "./assets/cookie_items/item4.png";
import item5 from "./assets/cookie_items/item5.png";
import item6 from "./assets/cookie_items/item6.png";
import item7 from "./assets/cookie_items/item7.png";
import item8 from "./assets/cookie_items/item8.png";
import item9 from "./assets/cookie_items/item9.png";
import { useState } from "react";
interface catProps {
  index: number;
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
}

function ProductCard(props: productCardProps) {
  return (
    <>
      <div className="h-150 w-[445px] bg-[rgba(0,0,0,0.1)] rounded-3xl border border-white border-box hover:-translate-y-2 transition-all ease-in ">
        <img
          src={props.imgUrl}
          alt="item"
          className="w-full h-3/4 rounded-t-3xl scale-[0.7]"
        ></img>
        <div className="w-full h-1/4 bg-[rgba(0,0,0,0.1)] rounded-b-3xl text-xl text-white p-10 flex flex-col">
          {props.description}
          <div
            className={` rounded-full ${props.buttonBgColor} w-40 h-15 flex items-center justify-center`}
          >
            Add To Cart
          </div>
        </div>
      </div>
    </>
  );
}

function Items(category: catProps) {
  const allItemsArray: productCardProps[][] = [
    [
      {
        imgUrl: item,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
      {
        imgUrl: item2,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
      {
        imgUrl: item3,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
    ],
    [
      {
        imgUrl: item5,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
      {
        imgUrl: item6,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
    ],
    [
      {
        imgUrl: item7,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
      {
        imgUrl: item8,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
      {
        imgUrl: item9,
        buttonBgColor: category.buttonBgColor,
        description: "test testtttt tesst tessst teeest",
      },
    ],
  ];
  const currentCatItems: productCardProps[] = allItemsArray[category.index];
  return (
    <>
      <div className="absolute w-full h-full top-[100vh] flex items-center justify-center overflow-auto z-1">
        <div className="h-[80vh] w-350 flex justify-center flex-wrap opacity-100 gap-8 box-content">
          {currentCatItems.map((product) => (
            <ProductCard
              imgUrl={product.imgUrl}
              buttonBgColor={product.buttonBgColor}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
function Menu() {
  const categories: catProps[] = [
    {
      index: 0,
      imgUrl: cookieimg,
      bgColor: "bg-amber-100",
      textColor: "text-orange-300",
      label: "cookies",
      buttonBgColor: "bg-orange-300",
    },
    {
      index: 1,
      imgUrl: brownieimg,
      bgColor: "bg-[#B5816E]",
      textColor: "text-[#4D3228]",
      label: "brownies",
      buttonBgColor: "bg-[#4D3228]",
    },
    {
      index: 2,
      imgUrl: tiramisuimg,
      bgColor: "bg-orange-300",
      textColor: "text-orange-900",
      label: "tiramisu's",
      buttonBgColor: "bg-orange-900",
    },
  ];

  const [index, setIndex] = useState(0);
  function decrimentIndex() {
    setIndex((prevIndex) => (prevIndex - 1 < 0 ? 2 : prevIndex - 1));
  }
  function incrimentIndex() {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  }
  return (
    <>
      <Items {...categories[index]} />
      <div
        className={`min-h-screen
      blur-3xl
      ${categories[index].bgColor}
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
            ${categories[index].textColor}
            tracking-widest
            transition-all duration-300 ease-in
            -mt-20
            mb-5`}
          >
            pick the category
          </div>

          <img
            src={categories[index].imgUrl}
            alt="Image"
            className="-mt-15
            cursor-pointer
            block
            hover:scale-[1.05]
            transition-all ease-in duration-150"
          ></img>
          <div
            className={`mb-5
            text-3xl
            ${categories[index].buttonBgColor}
            text-white
            rounded-2xl
            w-1/1
            h-15
            flex justify-center items-center
            transition-all duration-300 ease-in`}
          >
            {categories[index].label}
          </div>
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
