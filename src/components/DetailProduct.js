import React from 'react'

function DetailProduct({renderPro}) {
    console.log("Detail",renderPro);
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
                  <img src="./Pictures/chitietsanpham/img-1.jpg" />
                </div>
                <div>
                  <img src="./Pictures/chitietsanpham/img-2.jpg" />
                </div>
                <div>
                  <img src="./Pictures/chitietsanpham/img-3.jpg" />
                </div>
              </section>
            </div>
            <div className="col-md-4 img-main">
              <img src="Pictures/chitietsanpham/main.jpg" alt="" />
            </div>
            <div className="col-md-4">
              <h4>Trà Shan Tuyết</h4>
              <div className="d-flex">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <span>(17)</span>
              </div>
              <div className="d-flex mb-2">
                <h5 className="mt-2 me-3">
                  50.000 <span>VND</span>
                </h5>
                <select name="" id="">
                  <option value={200}>200g</option>
                  <option value={200}>100g</option>
                </select>
                <p />
              </div>
              <div className="content-2">
                <p>SẢN PHẨM ĐẠT CHUẨN VỆ SINH AN TOÀN THỰC PHẨM </p>
                <p>
                  Trà Shan Tuyết (Chè Shan Tuyết) hay còn được gọi là trag
                  tuyết. Đây là loại trà đặc sản cửa các đồng bào tộc người Tày,
                  Giao, Mông và là đặc sản của các tỉnh như Hà Giang, Điện Biên,
                  Lào Cai
                </p>
                <p>
                  Đặc điểm của trà Shan Tuyết là búp trà (cánh trà) rất to và
                  màu trắng, dưới cánh trà phủ một lớp lông tơ mịn màu trắng
                </p>
                <p>
                  Cây trà Shan Tuyết cổ thụ rất lớn, có khi vài người lớn vòng
                  tay ôm. Mộc ở trên núi cao hơn 1200m, quanh năm mây mù và
                  lạnh. Sự chênh lệch nhiệt độ giữa ngày và đêm là rất lớn,
                  chính bởi có điều kiện tự nhiên thú vị như vậy nên đó là nét
                  độc đáo tạo ra một hương vị trà Shan Tuyết cổ thụ thơm ngon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instruct row">
        <div className="instruct-content col-md-3">
          <h3>Hướng dẫn pha trà Shan Tuyết</h3>
          <p>
            <i className="fa-solid fa-droplet" />
            Đổ vào ấm từ 150-200ml, nước sôi nhiệt độ 85 độ C{" "}
          </p>
          <p>
            <i className="fa-solid fa-spoon" /> 1-2 nắm trà, khoảng 20-30 gram
          </p>
          <p>
            <i className="fa-regular fa-clock" /> Để trà 4-6 phút
          </p>
        </div>
        <div className="instruct-img col-md-6">
          <img src="Pictures/chitietsanpham/phatra.jpg" alt="" />
        </div>
      </div>
    
    </div>
  </div>
</section>

  )
}

export default DetailProduct