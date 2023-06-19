import React from "react";
import Product from "./Product";

function ListProduct({ renderProducts,onClickProduct }) {
  const handleClick=(pro)=>{
    onClickProduct(pro);
  }
  console.log("List renderProducts:", renderProducts);
  let elementProduct = renderProducts.map((product, index) => {
    return <Product key={index} renderProduct={product} onClickProduct={handleClick}/>;
  });
  return (
    <>
      <div className="col-md-9 d-flex flex-wrap list-product">
        <div className="row row-cols-md-4">{elementProduct}</div>
      </div>
    </>
  );
}

export default ListProduct;
