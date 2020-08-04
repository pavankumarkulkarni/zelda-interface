import React, { createRef, useEffect, useState } from "react";
import TraingleBox from "./TraingleBox";

export default function Modal({ closeModal, itemEquipped }) {
  const modalWindow = createRef();
  const [selection, setSelection] = useState("equip");
  useEffect(() => {
    // console.log("modal in focus");
    if (modalWindow.current) {
      modalWindow.current.focus();
    }
  }, [modalWindow]);

  const handleKeyBoardModal = (e) => {
    e.stopPropagation();
    switch (e.key) {
      case "ArrowUp":
        setSelection("equip");
        break;
      case "ArrowDown":
        setSelection("close");
        break;
      case "Enter":
        if (selection === "equip") {
          closeModal();
          itemEquipped();
        } else {
          closeModal();
        }
        break;
      default:
        closeModal();
        break;
    }
  };
  return (
    <div
      className=" outline-none p-4 w-32 bg-black border border-zeldadarkGray z-20 top-1/2 left-1/2 absolute z-30"
      onKeyDown={handleKeyBoardModal}
      tabIndex="0"
      ref={modalWindow}
    >
      <div
        className={`px-6 py-2 border mb-4 cursor-pointer z-30 relative
                    ${
                      selection === "equip"
                        ? "border-zeldasoftYellow"
                        : "border-zeldadarkGray"
                    }`}
        onClick={() => {
          closeModal();
          itemEquipped();
        }}
      >
        Equip
        {selection === "equip" ? <TraingleBox /> : null}
      </div>
      <div
        className={`px-6 py-2 border mb-4 cursor-pointer z-30 relative
        ${
          selection === "close"
            ? "border-zeldasoftYellow"
            : "border-zeldadarkGray"
        }`}
        onClick={closeModal}
        tabIndex="0"
      >
        Close
        {selection === "close" ? <TraingleBox /> : null}
      </div>
    </div>
  );
}
