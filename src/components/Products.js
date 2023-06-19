import { Navigate, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ListProduct from "./ListProduct";

function Products({onClickProduct}) {
  //Tạo mock data sản phẩm
  const listProducts = [
    {
      productId: 1,
      productName: "Trà Shan Tuyết",
      productImage: "Pictures/san-pham/pr-1.png",
      productPrice: 50000,
      productRating: 4,
      productReview: 17,
    },
    {
      productId: 2,
      productName: "Trà Shan Tuyết",
      productImage: "Pictures/san-pham/pr-2.png",
      productPrice: 60000,
      productRating: 4,
      productReview: 18,
    },
    {
      productId: 3,
      productName: "Trà Shan Tuyết",
      productImage: "Pictures/san-pham/pr-3.png",
      productPrice: 70000,
      productRating: 4,
      productReview: 19,
    },
    {
      productId: 4,
      productName: "Trà Shan Tuyết",
      productImage: "Pictures/san-pham/pr-1.png",
      productPrice: 80000,
      productRating: 4,
      productReview: 20,
    },
    {
      productId: 5,
      productName: "Trà Shan Tuyết",
      productImage: "Pictures/san-pham/pr-2.png",
      productPrice: 90000,
      productRating: 4,
      productReview: 21,
    },
  ];
  const [products, setProduct] = useState(() => {
    const lists = JSON.parse(localStorage.getItem("DEV_LISTPRODUCT"));
    if (lists == null) {
      return listProducts;
    } else {
      return lists;
    }
  });
  useEffect(() => {
    localStorage.setItem("DEV_LISTPRODUCT", JSON.stringify(products));
  }, [products]);

  // const navigate= useNavigate();
  const handleClick = (pro) => {
    onClickProduct(pro);
  };

  return (
    <>
      {/* start banner */}
      <div
        id="banner-product"
        className="container-fluid"
        style={{ backgroundImage: "url(Pictures/san-pham/banner.png)" }}
      >
        <div className="banner-img">
          {/* <img src="Pictures/san-pham/banner.png" alt=""> */}
          <div className="box-content text-center ">
            <p id="content-product">SẢN PHẨM</p>
          </div>
        </div>
      </div>
      {/* end banner */}
      {/* start new */}
      <div className="product-1" id="product">
        <div className="container-fluid">
          <div className="box-content">
            <div className="header">
              <p>Sản phẩm</p>
              <hr />
            </div>
            <div className="content-pr">
              {/* start-Checkbox */}
              <FilterProducts />
              {/* end-Checkbox */}

              {/* start product */}
              <ListProduct
                renderProducts={products}
                onClickProduct={handleClick}
              />
              {/* end product */}
            </div>
          </div>
        </div>
      </div>
      {/* end news */}
    </>
  );
}

export default Products;
