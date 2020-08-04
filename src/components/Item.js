import React, { useState, useEffect } from "react";
import TraingleBox from "./TraingleBox";
import Modal from "./Modal";

export default function Item(props) {
  const {
    item,
    setSelectedItemIndex,
    index,
    itemClasses,
    selectedItemClasses,
    selectedItemIndex,
    setSelectedItem,
    sound2,
    setEquippedItems,
    equippedItems,
    modalIndex,
  } = props;

  const [modalDisplay, setModalDisplay] = useState(false);

  useEffect(() => {
    if (index === modalIndex) {
      setModalDisplay(true);
    }
  }, [modalIndex, index]);

  const itemEquipped = () => {
    setEquippedItems((equippedItems) => [...equippedItems, item]);
  };

  const closeModal = () => {
    setModalDisplay(false);
  };

  const handleClick = () => {
    setSelectedItem(item);
    setSelectedItemIndex(index);
    sound2.play();
    if (index === selectedItemIndex) {
      setModalDisplay(true);
    }
  };

  // const handleKeyBoard = (e) => {
  //   console.log(e.keyCode);
  // };

  return (
    <div
      className={`${
        index === selectedItemIndex ? selectedItemClasses : itemClasses
      }
      ${equippedItems.indexOf(item) > -1 ? "bg-blue-700" : "bg-black"}`}
      // onKeyDown={handleKeyBoard}
    >
      {modalDisplay ? (
        <Modal closeModal={closeModal} itemEquipped={itemEquipped} />
      ) : null}
      <div onClick={handleClick}>
        <img src={item.icon} alt="" title={item.title} />
        {item.value !== null ? (
          <span className="bg-black px-1 absolute bottom-0 right-0 border border-zeldalightGray z-10">
            {item.value}
          </span>
        ) : null}
        {index === selectedItemIndex ? <TraingleBox /> : null}
      </div>
    </div>
  );
}
