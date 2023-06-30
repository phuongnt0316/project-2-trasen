import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ListProduct from "./ListProduct";

function Products({ onClickProduct }) {
  //Tạo mock data sản phẩm
  const listProducts = [
    {
      productId: 1,
      productName: "Trà Ô long",
      productType: "Trà Ô long",
      productImage: "Pictures/san-pham/pr-1.png",
      productPrice: 50000,
      productRating: 4,
      productReview: 17,
    },
    {
      productId: 2,
      productName: "Trà Shan tuyết",
      productType: "Trà Shan tuyết",
      productImage: "Pictures/san-pham/pr-2.png",
      productPrice: 60000,
      productRating: 4,
      productReview: 18,
    },
    {
      productId: 3,
      productName: "Trà Búp",
      productType: "Trà Búp",
      productImage: "Pictures/san-pham/pr-3.png",
      productPrice: 70000,
      productRating: 4,
      productReview: 19,
    },
    {
      productId: 4,
      productName: "Trà Ô long",
      productType: "Trà Ô long",
      productImage: "Pictures/san-pham/pr-1.png",
      productPrice: 80000,
      productRating: 4,
      productReview: 20,
    },
    {
      productId: 5,
      productName: "Trà Shan Tuyết",
      productType: "Trà xanh",
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

  const [fttraxanh, setFltTraxanh] = useState(false);
  const [fttraolong, setFltTraolong] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  let filteredProducts = products;
  //Áp dụng bộ lọc sản phẩm
  if (fttraxanh||fttraolong) {
    filteredProducts = filteredProducts.filter(item => 
      (fttraxanh && item.productType === "Trà Shan tuyết")||(fttraolong && item.productType==="Trà Ô long"));
  }
  //console.log("check:",checkProduct());
  // Áp dụng sắp xếp
  if (sortBy === "gia-asc") {
    filteredProducts = filteredProducts.sort(
      (a, b) => parseFloat(a.productPrice) - parseFloat(b.productPrice)
    );
  } else if (sortBy === "gia-desc") {
    filteredProducts = filteredProducts.sort(
      (a, b) => parseFloat(b.productPrice) - parseFloat(a.productPrice)
    );
  }

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
              <p>
                <Link to={"/"}>Trang chủ &gt; </Link>
                <Link to={"/Products"}>Sản phẩm</Link>
              </p>
              <h2>Sản phẩm</h2>
              <hr />
            </div>

            <div className="content-pr">
              {/* start-Checkbox */}
              {/* <FilterProducts /> */}
              <div className="product-header col-md-2">
                <div className="product-form-hd">
                  <p>Bộ lọc sản phẩm</p>
                  <p>Loại sản phẩm</p>
                </div>

                {/*start form check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    checked={fttraxanh}
                    onChange={() => setFltTraxanh(!fttraxanh)}
                    id="traxanh"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà xanh Thái Nguyên
                  </label>
                </div>
                {/* end form check */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    checked={fttraolong}
                    onChange={() => setFltTraolong(!fttraolong)}
                    id="traolong"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà Olong
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà Shan tuyết
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà sen
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà lài
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà thảo dược
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Dụng cụ pha trà
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Nước pha trà
                  </label>
                </div>

                <p>Thương hiệu</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà Tân Cương Xanh
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà Sen Tây Hồ
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="chb-loaisp"
                  />
                  <label className="form-check-label" htmlFor="chb-loaisp">
                    Trà Lộc Tân
                  </label>
                </div>
              </div>
              <div className="sort">
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="">Thứ tự mặc định</option>
                  <option value="gia-asc">Giá thấp đến cao</option>
                  <option value="gia-desc">Giá cao đến thấp</option>
                </select>
              </div>
              {/* end-Checkbox */}

              {/* start product */}
              <ListProduct
                renderProducts={filteredProducts}
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
