import React, { useState } from "react";
import Sword from "./Sword";
import Armor from "./Armor";
import Shield from "./Shield";
import action from "../assets/sounds/action.mp3";
import getItemsForDisplay from "./util/GetItemsForDisplay";

export default function CategoriesMenu({
  setItemMainCategory,
  itemMainCategory,
  selectedItemIndex,
  setSelectedItem,
}) {
  const cname =
    "border-b px-4 cursor-pointer py-2 text-zeldalightGray border-zeldalightGray";

  const currentcname =
    "border-b px-4 cursor-pointer py-2 text-white border-white";

  const [sound] = useState(new Audio(action));
  // console.log(selectedItemIndex);
  return (
    <div
      className="flex 
          justify-center 
          mb-4 
          p-4"
    >
      <div
        className={itemMainCategory === "weapons" ? currentcname : cname}
        onClick={() => {
          setItemMainCategory("weapons");
          setSelectedItem(getItemsForDisplay("weapons")[selectedItemIndex]);
          sound.play();
        }}
      >
        <Sword />
      </div>
      <div
        className={itemMainCategory === "shields" ? currentcname : cname}
        onClick={() => {
          setItemMainCategory("shields");
          setSelectedItem(getItemsForDisplay("shields")[selectedItemIndex]);
          sound.play();
        }}
      >
        <Shield />
      </div>
      <div
        className={itemMainCategory === "armors" ? currentcname : cname}
        onClick={() => {
          setItemMainCategory("armors");
          setSelectedItem(getItemsForDisplay("armors")[selectedItemIndex]);
          sound.play();
        }}
      >
        <Armor />
      </div>
    </div>
  );
}
