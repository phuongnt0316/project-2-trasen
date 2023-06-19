import React from "react";
function Product({ renderProduct,onClickProduct}) {
    const handleClick=(pro)=>{
      onClickProduct(pro)
    }
    let rate = [];
    for (var i = 0; i < renderProduct.productRating; i++) {
      rate.push(<i class="fa-solid fa-star" key={i}></i>);
    }
    for (var i = 0; i <5- renderProduct.productRating; i++) {
      rate.push(<i class="fa-regular fa-star" key={5-i}></i>);
    }
  

  console.log("product:", renderProduct);
  return (
    <>
      <div className="col-md-4  mb-5">
        <div className="card ">
          <div className="card-header-1 d-flex ">
            <ul className="img-icon me-auto d-flex">
              {rate}
              <span>({renderProduct.productReview})</span>
            </ul>

            <p>NEW</p>
          </div>
          <img
            src={renderProduct.productImage}
            alt={renderProduct.productName}
            className="card-img-center img-product"
            style={{ width: 240 }}
             onClick={()=>handleClick(renderProduct)}
          />
          <div className="card-body">
            <h5 className="card-title text-center">{renderProduct.productName}</h5>
            <p className="card-text text-center">
              {renderProduct.productPrice}
              <select name="" id="">
                <option value={200}>200g</option>
                <option value={200}>100g</option>
              </select>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
