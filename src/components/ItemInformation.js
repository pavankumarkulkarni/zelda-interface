import React, { useState, useEffect } from "react";
import Armor from "./Armor";
import Shield from "./Shield";
import Sword from "./Sword";

export default function ItemInformation({ selectedItem }) {
  const [desc, setDesc] = useState("");
  let i = 0;
  const typeDesc = () => {
    if (selectedItem.description && i < selectedItem.description.length) {
      setDesc(selectedItem.description.slice(0, i + 1));
    }
    i++;
    setTimeout(typeDesc, 1);
  };
  useEffect(() => {
    typeDesc();
    // eslint-disable-next-line
  }, [selectedItem]);

  function iconDisplay(item) {
    switch (item.category) {
      case "weapon":
        return <Sword w={"20"} h={"20"} />;

      case "shield":
        return <Shield w={"20"} h={"20"} />;

      case "armor":
      case "helm":
      case "greave":
        return <Armor w={"20"} h={"20"} />;

      default:
        return;
    }
  }
  // console.log(selectedItem);
  return selectedItem && selectedItem.name !== null ? (
    <div className="p-4 bg-BlackTransparent min-h-full z-10 relative">
      <h1 className="text-lg font-bold border-b border-zeldadarkGray pb-1">
        {selectedItem.name}
      </h1>
      <div className="pt-2 flex justify-start items-center">
        {iconDisplay(selectedItem)}

        <span className="inline-block border border-zeldalightGray px-3 ml-4 text-xl ">
          {selectedItem.value}
        </span>
      </div>
      <p className="pt-4 text-sm h-16">{desc}</p>
    </div>
  ) : null;
}
