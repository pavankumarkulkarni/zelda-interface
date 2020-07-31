import allItems from "../../data/items";

export default function getItemsForDisplay(mainCategory) {
  const emptyItem = {
    name: null,
    category: null,
    icon: null,
    value: null,
    isNew: null,
    description: null,
  };
  const items = allItems[mainCategory];
  const l = items.length;
  for (let i = 0; i < 15 - l; i++) {
    items.push(emptyItem);
  }

  return items;
}
