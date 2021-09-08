import React from "react";
import SearchBar from "../templates/SearchBar";
import ProductInfoDisplay from "./ProductDisplay";
// import ActionBar from "../templates/ActionBar";

const ProductInfo = () => {
  const formInfo = [
    {
      name: "product",
      label: "产品内容",
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
      displayValue: "长条",
    },
    {
      optionValue: "b",
      displayValue: "单肩",
    },
  ];

  //   const buttonInfo = ["新增订单", "导出", "导入", "回收站"];

  return (
    <div>
      <SearchBar formInfo={formInfo} dropdownItems={dropdownItems} />
      {/* <ActionBar buttonInfo={buttonInfo} /> */}
      <ProductInfoDisplay />
    </div>
  );
};

export default ProductInfo;
