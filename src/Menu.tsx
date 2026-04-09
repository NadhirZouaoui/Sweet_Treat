import cookieimg from "./assets/cookieCat.png";
import brownieimg from "./assets/browniesCat.png";
import tiramisuimg from "./assets/tiramisuCat.png";
import { useState } from "react";
interface catProps {
  bgColor: string;
  imgUrl: string;
  textColor: string;
  buttonBgColor: string;
  label: string;
}

function Menu() {
  const categories: catProps[] = [
    {
      imgUrl: cookieimg,
      bgColor: "bg-amber-100",
      textColor: "text-orange-300",
      label: "cookies",
      buttonBgColor: "bg-orange-300",
    },
    {
      imgUrl: brownieimg,
      bgColor: "bg-[#B5816E]",
      textColor: "text-[#4D3228]",
      label: "brownies",
      buttonBgColor: "bg-[#4D3228]",
    },
    {
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
    <div
      className={`min-h-screen
      ${categories[index].bgColor} 
      bg-center 
      bg-cover
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
          hover:-translate-y-4 
          transition-all ease-in duration-300"
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
  );
}

export default Menu;
