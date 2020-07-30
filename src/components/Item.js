import React from "react";
import TraingleBox from "./TraingleBox";

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
  } = props;
  const handleClick = () => {
    setSelectedItem(item);
    setSelectedItemIndex(index);
    sound2.play();
  };

  return (
    <div
      className={
        index === selectedItemIndex ? selectedItemClasses : itemClasses
      }
      onClick={handleClick}
    >
      <img src={item.icon} alt="" title={item.title} />
      {item.value !== null ? (
        <span className="bg-black px-1 absolute bottom-0 right-0 border border-zeldalightGray z-10">
          {item.value}
        </span>
      ) : null}
      {index === selectedItemIndex ? <TraingleBox /> : null}
    </div>
  );
}
