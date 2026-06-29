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
import { create } from "zustand";

export enum Category {
  Cookies,
  Brownies,
  Tiramisu,
}

export interface itemProps {
  id: number;
  imgUrl: string;
  description: string;
  price: string;
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

export const allItemsArray: itemProps[][] = [
  [
    {
      id: 0,
      imgUrl: item,
      description: "Classic Cookie",
      price: "7 Dt",
    },
    {
      id: 1,
      imgUrl: item2,
      description: "Pistachio Cookie",
      price: "7 Dt",
    },
    {
      id: 2,
      imgUrl: item3,
      description: "Red Velvet Cookie",
      price: "7 Dt",
    },

    {
      id: 3,
      imgUrl: item8,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
    },
    {
      id: 4,
      imgUrl: item9,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
    },
  ],
  [
    {
      id: 5,
      imgUrl: item5,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
    },
    {
      id: 6,
      imgUrl: item6,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
    },
    {
      id: 7,
      imgUrl: item6,
      description: "test testtttt tesst  teeest",
      price: "7 Dt",
    },
  ],
];

export const categoriesArray: catProps[] = [
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

const getDefaultItemsQte = (): number[] => {
  let count: number = 0;
  let defaultItemsQte: number[] = [];
  for (let i = 0; i < allItemsArray.length; i++) {
    for (let j = 0; j < allItemsArray[i].length; j++) {
      defaultItemsQte[count] = 0;
      count++;
    }
  }
  return defaultItemsQte;
};
interface CounterStore {
  totalItemsAdded: number;
  qteItems: number[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  totalItemsAdded: 0,
  qteItems: getDefaultItemsQte(),
  addToCart: (itemId) => {
    set((state) => {
      const newQte = [...state.qteItems];
      const newTot = state.totalItemsAdded + 1;
      newQte[itemId] = newQte[itemId] + 1;
      return { qteItems: newQte, totalItemsAdded: newTot };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => {
      const newQte = [...state.qteItems];
      const newTot = state.totalItemsAdded - 1;
      newQte[itemId] = newQte[itemId] - 1;
      return { qteItems: newQte, totalItemsAdded: newTot };
    });
  },
}));
