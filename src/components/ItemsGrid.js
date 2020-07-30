import React, { useState } from "react";
import Item from "./Item";

import items from "../data/items";

import selectSound from "../assets/sounds/select.mp3";

export default function ItemsGrid({
  setSelectedItemIndex,
  selectedItemClasses,
  itemClasses,
  selectedItemIndex,
  setSelectedItem,
  itemMainCategory,
}) {
  const weapons = items[itemMainCategory];
  const l = weapons.length;
  const [sound2] = useState(new Audio(selectSound));
  const emptyItem = {
    name: null,
    category: null,
    icon: null,
    value: null,
    isNew: true,
    description: null,
  };
  for (let i = 0; i < 25 - l; i++) {
    weapons.push(emptyItem);
  }

  const indexToXY = (index) => ({ x: index % 5, y: Math.floor(index / 5) });
  const XYToIndex = (x, y) => x + y * 5;
  const handleKeyBoard = (e) => {
    let { x, y } = indexToXY(selectedItemIndex);
    switch (e.keyCode) {
      case 37:
        x = x - 1 >= 0 ? x - 1 : 0;
        break;
      case 38:
        y = y - 1 >= 0 ? y - 1 : 0;
        break;
      case 39:
        x = x === 4 ? 0 : x + 1;
        break;
      case 40:
        y = y === 4 ? 4 : y + 1;
        break;
      default:
        break;
    }
    const i = XYToIndex(x, y);
    setSelectedItemIndex(i);
    setSelectedItem(weapons[i]);
    sound2.play();
  };
  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyBoard}
      className="grid grid-cols-3 justify-center
                    sm:grid-cols-5 focus:outline-none
                   "
    >
      {weapons.map((weapon, index) => (
        <Item
          key={index}
          item={weapon}
          setSelectedItemIndex={setSelectedItemIndex}
          index={index}
          itemClasses={itemClasses}
          selectedItemClasses={selectedItemClasses}
          selectedItemIndex={selectedItemIndex}
          setSelectedItem={setSelectedItem}
          sound2={sound2}
        />
      ))}
    </div>
  );
}
