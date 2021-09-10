import React from "react";
import SearchBar from "./SearchBar.jsx";
import InventoryInfoDisplay from "./InventoryDisplay.jsx";

const InventoryInfo = () => {
  const formInfo = [
    {
      name: "materialName",
      label: "材料名称",
      required: false,
      dropdown: false,
    },
    {
      name: "category",
      label: "类别",
      required: false,
      dropdown: true,
    },
  ];

  const dropdownItems = [
    {
      optionValue: "a",
      displayValue: "拉链",
    },
    {
      optionValue: "b",
      displayValue: "拉链头",
    },
  ];

  return (
    <>
      <SearchBar formInfo={formInfo} dropdownItems={dropdownItems} />
      <InventoryInfoDisplay />
    </>
  );
};

export default InventoryInfo;
