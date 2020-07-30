import React, { useState } from "react";
import ItemsGrid from "./components/ItemsGrid";
import ItemInformation from "./components/ItemInformation";
import CategoriesMenu from "./components/CategoriesMenu";

import items from "./data/items";
import link from "./assets/bg.png";

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items.weapons[0]);
  const [itemMainCategory, setItemMainCategory] = useState("weapons");

  const itemClasses =
    " relative my-4 mx-auto w-20 h-20 bg-black border border-zeldalightGray";
  const selectedItemClasses =
    "relative my-4 mx-auto w-20 h-20 bg-black border border-zeldasoftYellow shadow-yellow";

  return (
    <div
      style={{ fontFamily: "calamity" }}
      className="bg-zeldadarkGreen text-white h-full min-h-screen xl:p-8 p-2"
    >
      <div
        id="mainContainer"
        className="xl:p-6 p-4 xl:flex items-end focus:outline-none"
      >
        <div className="w-full">
          <div className="mx-auto">
            <CategoriesMenu
              setItemMainCategory={setItemMainCategory}
              itemMainCategory={itemMainCategory}
              selectedItemIndex={selectedItemIndex}
              setSelectedItem={setSelectedItem}
            />
          </div>
          <div id="col1" className="w-full">
            <ItemsGrid
              setSelectedItemIndex={setSelectedItemIndex}
              itemClasses={itemClasses}
              selectedItemClasses={selectedItemClasses}
              selectedItemIndex={selectedItemIndex}
              setSelectedItem={setSelectedItem}
              itemMainCategory={itemMainCategory}
            />
          </div>
        </div>
        <div id="col2" className="w-full p-6 relative">
          <img
            src={link}
            alt="zelda image"
            className="mt-4 xl:block hidden absolute bottom-0 pl-56 z-0 mb-6"
          />
          <ItemInformation selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
