import React from "react";

export default function Modal({ closeModal, itemEquipped }) {
  return (
    <div className="p-4 w-32 bg-black border border-zeldadarkGray z-20 top-1/2 left-1/2 absolute z-30">
      <div
        className="px-6 py-2 border-zeldadarkGray border mb-4 cursor-pointer z-30"
        onClick={() => {
          closeModal();
          itemEquipped();
        }}
      >
        Equip
      </div>
      <div
        className="px-6 py-2 border-zeldadarkGray border cursor-pointer z-30"
        onClick={closeModal}
      >
        Close
      </div>
    </div>
  );
}
