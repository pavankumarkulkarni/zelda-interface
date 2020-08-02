import React, { useState } from "react";
import ItemsGrid from "./components/ItemsGrid";
import ItemInformation from "./components/ItemInformation";
import CategoriesMenu from "./components/CategoriesMenu";

import items from "./data/items";
import link from "./assets/bg.png";
import BigArrow from "./components/BigArrow";

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(items.weapons[0]);
  const [itemMainCategory, setItemMainCategory] = useState("weapons");
  const mainCategories = ["weapons", "shields", "armors"];
  const [equippedItems, setEquippedItems] = useState([]);

  const itemClasses =
    " relative my-4 mx-6 w-20 h-20 bg-black border border-zeldalightGray";
  const selectedItemClasses =
    "relative my-4 mx-6 w-20 h-20 bg-black border border-zeldasoftYellow shadow-yellow";

  const handleLeftArrow = (e) => {
    // console.log(itemMainCategory);
    if (mainCategories.indexOf(itemMainCategory) > 0) {
      setItemMainCategory(
        mainCategories[mainCategories.indexOf(itemMainCategory) - 1]
      );
    }
  };
  const handleRightArrow = (e) => {
    if (mainCategories.indexOf(itemMainCategory) < 2) {
      setItemMainCategory(
        mainCategories[mainCategories.indexOf(itemMainCategory) + 1]
      );
    }
  };
  return (
    <div
      style={{ fontFamily: "calamity" }}
      className="bg-zeldadarkGreen text-white h-full min-h-screen xl:p-8 p-2"
    >
      <div
        id="mainContainer"
        className="xl:p-6 p-2 xl:flex xl:items-stretch focus:outline-none xl:mt-16"
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
          <div
            id="col1"
            className="w-full flex justify-center items-center mx-auto"
          >
            <div
              className={`sm:inline-block hidden 
                  ${
                    mainCategories.indexOf(itemMainCategory) === 0
                      ? "text-zeldalightGray"
                      : "cursor-pointer"
                  } `}
              onClick={handleLeftArrow}
            >
              <BigArrow a={"180"} />
            </div>

            <ItemsGrid
              setSelectedItemIndex={setSelectedItemIndex}
              itemClasses={itemClasses}
              selectedItemClasses={selectedItemClasses}
              selectedItemIndex={selectedItemIndex}
              setSelectedItem={setSelectedItem}
              itemMainCategory={itemMainCategory}
              setItemMainCategory={setItemMainCategory}
              setEquippedItems={setEquippedItems}
            />
            <div
              className={`sm:inline-block hidden cursor-pointer
                      ${
                        mainCategories.indexOf(itemMainCategory) === 2
                          ? "text-zeldalightGray"
                          : "cursor-pointer"
                      }
                  
              `}
              onClick={handleRightArrow}
            >
              <BigArrow />
            </div>
          </div>
        </div>
        <div id="col2" className="w-full p-6 xl:relative">
          <img
            src={link}
            alt="zelda"
            className=" xl:block hidden xl:absolute xl:bottom-0 pl-56 z-0 mb-6 h-full"
          />

          <ItemInformation
            selectedItem={selectedItem}
            equipped={`${
              equippedItems.indexOf(selectedItem) > -1 ? true : false
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
