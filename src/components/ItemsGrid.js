import React, { useState, useRef, useEffect } from "react";
import Item from "./Item";
import getItemsForDisplay from "./util/GetItemsForDisplay";

import selectSound from "../assets/sounds/select.mp3";

export default function ItemsGrid({
  setSelectedItemIndex,
  selectedItemClasses,
  itemClasses,
  selectedItemIndex,
  setSelectedItem,
  itemMainCategory,
  setItemMainCategory,
  setEquippedItems,
  equippedItems,
}) {
  const items = getItemsForDisplay(itemMainCategory);
  const [sound2] = useState(new Audio(selectSound));
  const divRef = useRef();

  const mainCategories = ["weapons", "shields", "armors"];
  // console.log(mainCategories.indexOf(itemMainCategory));
  const [modalIndex, setModalIndex] = useState(-1);

  const indexToXY = (index) => ({ x: index % 5, y: Math.floor(index / 5) });
  const XYToIndex = (x, y) => x + y * 5;
  const handleKeyBoard = (e) => {
    let { x, y } = indexToXY(selectedItemIndex);
    switch (e.keyCode) {
      case 37:
        x =
          x - 1 >= 0
            ? x - 1
            : mainCategories.indexOf(itemMainCategory) === 0
            ? 0
            : 4;
        if (x === 4) {
          setItemMainCategory(
            mainCategories[mainCategories.indexOf(itemMainCategory) - 1]
          );
        }
        break;
      case 38:
        y = y - 1 >= 0 ? y - 1 : 0;
        break;
      case 39:
        x =
          x !== 4
            ? x + 1
            : mainCategories.indexOf(itemMainCategory) === 2
            ? 4
            : 0;
        if (x === 0) {
          setItemMainCategory(
            mainCategories[mainCategories.indexOf(itemMainCategory) + 1]
          );
        }
        break;
      case 40:
        y = y === 2 ? 2 : y + 1;
        break;

      case 13:
        setModalIndex(XYToIndex(x, y));
        break;

      default:
        break;
    }
    const i = XYToIndex(x, y);
    setSelectedItemIndex(i);
    setSelectedItem(items[i]);
    sound2.play();
  };

  useEffect(() => {
    divRef.current.focus();
  }, [divRef]);

  return (
    <div
      tabIndex="0"
      // // autofocus="true"
      ref={divRef}
      onKeyDown={handleKeyBoard}
      className="grid grid-cols-3 justify-center
                    sm:grid-cols-5 focus:outline-none
                   "
    >
      {items.map((weapon, index) => (
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
          setEquippedItems={setEquippedItems}
          itemMainCategory={itemMainCategory}
          equippedItems={equippedItems}
          modalIndex={modalIndex}
        />
      ))}
    </div>
  );
}
