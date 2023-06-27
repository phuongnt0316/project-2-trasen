import React from "react";

function DetailProduct({ renderPro }) {
  const listDetailPro = [
    {
      productId: 1,
      productImage1: "Pictures/san-pham/pr-1.png",
      productImage2: "Pictures/san-pham/pr-2.png",
      productImage3: "Pictures/san-pham/pr-3.png",
      productImageM1: "Pictures/san-pham/pr-1.png",
      productImageM2: "Pictures/san-pham/pr-1.png",
      productstrucst: `SẢN PHẨM ĐẠT CHUẨN VỆ SINH AN TOÀN THỰC PHẨM 

      Trà Shan Tuyết (Chè Shan Tuyết) hay còn được gọi là trag tuyết. Đây là loại trà đặc sản cửa các đồng bào tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang, Điện Biên, Lào Cai 
      
      Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và màu trắng, dưới cánh trà phủ một lớp lông tơ mịn màu trắng \
       
      Cây trà Shan Tuyết cổ thụ rất lớn, có khi vài người lớn vòng tay ôm. Mộc ở trên núi cao hơn 1200m, quanh năm mây mù và lạnh. Sự chênh lệch nhiệt độ giữa ngày và đêm là rất lớn, chính bởi có điều kiện tự nhiên thú vị như vậy nên đó là nét độc đáo tạo ra một hương vị trà Shan Tuyết cổ thụ thơm ngon.`,
      productInstruct1: "Đổ vào ấm từ 150-200ml, nước sôi nhiệt độ 85 độ C",
      productInstruct2: " 1-2 nắm trà, khoảng 20-30 gram",
      productInstruct3: "Để trà 4-6 phút",
    },
    {
      productId: 2,
      productImage1: "Pictures/san-pham/pr-1.png",
      productImage2: "Pictures/san-pham/pr-2.png",
      productImage3: "Pictures/san-pham/pr-3.png",
      productImageM1: "Pictures/san-pham/pr-1.png",
      productImageM2: "Pictures/san-pham/pr-1.png",
      productstrucst: `SẢN PHẨM ĐẠT CHUẨN VỆ SINH AN TOÀN THỰC PHẨM 

      Trà Shan Tuyết (Chè Shan Tuyết) hay còn được gọi là trag tuyết. Đây là loại trà đặc sản cửa các đồng bào tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang, Điện Biên, Lào Cai 
      
      Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và màu trắng, dưới cánh trà phủ một lớp lông tơ mịn màu trắng \
       
      Cây trà Shan Tuyết cổ thụ rất lớn, có khi vài người lớn vòng tay ôm. Mộc ở trên núi cao hơn 1200m, quanh năm mây mù và lạnh. Sự chênh lệch nhiệt độ giữa ngày và đêm là rất lớn, chính bởi có điều kiện tự nhiên thú vị như vậy nên đó là nét độc đáo tạo ra một hương vị trà Shan Tuyết cổ thụ thơm ngon.`,
      productInstruct1: "Đổ vào ấm từ 150-200ml, nước sôi nhiệt độ 85 độ C",
      productInstruct2: " 1-2 nắm trà, khoảng 20-30 gram",
      productInstruct3: "Để trà 4-6 phút",
    },
    {
      productId: 3,
      productImage1: "Pictures/san-pham/pr-1.png",
      productImage2: "Pictures/san-pham/pr-2.png",
      productImage3: "Pictures/san-pham/pr-3.png",
      productImageM1: "Pictures/san-pham/pr-1.png",
      productImageM2: "Pictures/san-pham/pr-1.png",
      productstrucst: `SẢN PHẨM ĐẠT CHUẨN VỆ SINH AN TOÀN THỰC PHẨM 

      Trà Shan Tuyết (Chè Shan Tuyết) hay còn được gọi là trag tuyết. Đây là loại trà đặc sản cửa các đồng bào tộc người Tày, Giao, Mông và là đặc sản của các tỉnh như Hà Giang, Điện Biên, Lào Cai 
      
      Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và màu trắng, dưới cánh trà phủ một lớp lông tơ mịn màu trắng \
       
      Cây trà Shan Tuyết cổ thụ rất lớn, có khi vài người lớn vòng tay ôm. Mộc ở trên núi cao hơn 1200m, quanh năm mây mù và lạnh. Sự chênh lệch nhiệt độ giữa ngày và đêm là rất lớn, chính bởi có điều kiện tự nhiên thú vị như vậy nên đó là nét độc đáo tạo ra một hương vị trà Shan Tuyết cổ thụ thơm ngon.`,
      productInstruct1: "Đổ vào ấm từ 150-200ml, nước sôi nhiệt độ 85 độ C",
      productInstruct2: " 1-2 nắm trà, khoảng 20-30 gram",
      productInstruct3: "Để trà 4-6 phút",
    },
  ];
  let rate = [];
    for (var i = 0; i < renderPro.productRating; i++) {
      rate.push(<i class="fa-solid fa-star" key={i}></i>);
    }
    for (var i = 0; i <5- renderPro.productRating; i++) {
      rate.push(<i class="fa-regular fa-star" key={5-i}></i>);
    }

 let elementDetail = listDetailPro.filter(product=> product.productId === renderPro.productId);
  console.log("Detail", renderPro.productId);
  console.log("elementProduct",elementDetail[0].productId);
  let pro={
    productId: 0,
    productImage1: "",
    productImage2: "",
    productImage3: "",
    productImageM1: "",
    productImageM2: "",
    productstrucst: ``,
    productInstruct1: "",
    productInstruct2: " ",
    productInstruct3: "",
  }
  pro=elementDetail[0];
  console.log("pro",pro.productId);

  return (
    <section id="chitiet">
      <div className="common-section">
        <div className="sp">
          {/* <img src="./Pictures/chitietsanpham/background.jpg" alt=""> */}
          <div className="link d-flex">
            <a href="index1.php">Trang chủ &nbsp;</a> <span>&gt;</span>
            <a href="chitietsp.php"> &nbsp;Chi tiết sản phẩm</a>
          </div>
          <div className="intro-product">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <section className="vertical-center slider list-img">
                    <div>
                      <img src={pro.productImage1} />
                    </div>
                    <div>
                      <img src={pro.productImage2} />
                    </div>
                    <div>
                      <img src={pro.productImage3} />
                    </div>
                  </section>
                </div>
                <div className="col-md-4 img-main">
                  <img src={pro.productImageM1} alt="" />
                </div>
                <div className="col-md-4">
                  <h4>{renderPro.productName}</h4>
                  <div className="d-flex">
                    {rate}
                    <span>({renderPro.productReview})</span>
                  </div>
                  <div className="d-flex mb-2">
                    <h5 className="mt-2 me-3">
                      {renderPro.productPrice} <span>VND</span>
                    </h5>
                    <select name="" id="">
                      <option value={200}>200g</option>
                      <option value={200}>100g</option>
                    </select>
                    <p />
                  </div>
                  <div className="content-2">
                    {pro.productstrucst}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="instruct row">
            <div className="instruct-content col-md-3">
              <h3>Hướng dẫn pha {renderPro.productName} </h3>
              <p>
                <i className="fa-solid fa-droplet" />
                {pro.productInstruct1}
              </p>
              <p>
                <i className="fa-solid fa-spoon" /> {pro.productInstruct2}
                
              </p>
              <p>
                <i className="fa-regular fa-clock" /> {pro.productInstruct3}
              </p>
            </div>
            <div className="instruct-img col-md-6">
              <img src={pro.productImageM2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProduct;
